// game.js — Game loop, screen navigation, confetti for "הגינה שלנו"

function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ── State ─────────────────────────────────────────────────────
let appState        = null;   // full persisted state
let sessionFlowers  = [];     // flowers earned THIS session
let usedScenarios   = new Set();
let roundIdx        = 0;
let generousCount   = 0;
let selfishCount    = 0;
let sessionMode     = 'together';
let roundLocked     = false;
let toastTO         = null;
let currentTurn     = 1;
const ROUNDS_PER_SESSION = 9;

// ── Init ──────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  appState = loadState();
  loadSoundPref();
  setupModeButtons();

  // Show "our garden" peek button on start screen if garden has flowers
  const peek = document.getElementById('gardenPeek');
  if (peek && appState.garden.flowers > 0) {
    peek.style.display = 'block';
  }

  // Pre-fill names from last session
  const p1 = document.getElementById('player1Name');
  const p2 = document.getElementById('player2Name');
  if (p1 && appState.players.player1) p1.value = appState.players.player1;
  if (p2 && appState.players.player2) p2.value = appState.players.player2;
});

// ── Mode Buttons ──────────────────────────────────────────────
function setupModeButtons() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      sessionMode = btn.dataset.mode;

      const p2Field = document.getElementById('player2Field');
      if (p2Field) {
        p2Field.style.display = sessionMode === 'together' ? 'block' : 'none';
      }
    });
  });
}

// ── Start Game ────────────────────────────────────────────────
function startGame() {
  const p1Input = document.getElementById('player1Name');
  const p1 = p1Input ? p1Input.value.trim() : '';

  if (!p1) {
    if (p1Input) {
      p1Input.classList.add('shake');
      p1Input.focus();
      p1Input.style.borderColor = '#f44336';
      setTimeout(() => {
        p1Input.classList.remove('shake');
        p1Input.style.borderColor = '#ddd';
      }, 600);
    }
    return;
  }

  const p2Input = document.getElementById('player2Name');
  const p2 = (sessionMode === 'together' && p2Input) ? p2Input.value.trim() : '';

  if (sessionMode === 'together' && !p2) {
    if (p2Input) {
      p2Input.classList.add('shake');
      p2Input.focus();
      p2Input.style.borderColor = '#f44336';
      setTimeout(() => {
        p2Input.classList.remove('shake');
        p2Input.style.borderColor = '#ddd';
      }, 600);
    }
    return;
  }

  // Save names to state
  appState.players.player1 = p1;
  appState.players.player2 = p2;

  // Reset session
  sessionFlowers  = [];
  usedScenarios   = new Set();
  roundIdx        = 0;
  generousCount   = 0;
  selfishCount    = 0;
  roundLocked     = false;
  currentTurn     = 1;

  // Reset flower counter badge
  const flowerBadge = document.getElementById('flowerCountBadge');
  if (flowerBadge) flowerBadge.textContent = '🌸 0';

  // Update name badge
  const nameBadge = document.getElementById('gameNames');
  if (nameBadge) {
    nameBadge.textContent = p2 ? (p1 + ' ו' + p2) : p1;
  }

  showScreen('screen-game');
  nextRound();
}

// ── Next Round ────────────────────────────────────────────────
function nextRound() {
  if (roundIdx >= ROUNDS_PER_SESSION) {
    endGame();
    return;
  }

  roundLocked = false;
  roundIdx++;

  // Update round badge
  const roundBadge = document.getElementById('roundBadge');
  if (roundBadge) roundBadge.textContent = (STRINGS['round_badge'] || 'סיבוב %1 מתוך %2')
    .replace('%1', roundIdx).replace('%2', ROUNDS_PER_SESSION);

  // Update name badge per turn (together mode)
  const nameBadge = document.getElementById('gameNames');
  if (nameBadge && sessionMode === 'together' && appState.players.player2) {
    const name = currentTurn === 1 ? appState.players.player1 : appState.players.player2;
    nameBadge.textContent = (STRINGS['turn_indicator'] || '✨ תור של %1').replace('%1', name);
    currentTurn = currentTurn === 1 ? 2 : 1;
  }

  // Clear feedback
  const feedback = document.getElementById('feedbackMsg');
  if (feedback) { feedback.textContent = ''; feedback.className = 'feedback-msg'; }

  // Pick scenario
  const scenario = pickScenario();
  renderScenario(scenario);

  // Update mini garden + animals
  renderGardenMini(sessionFlowers);
  renderMiniAnimals(appState);
}

// ── Pick Scenario ─────────────────────────────────────────────
function pickScenario() {
  if (usedScenarios.size >= SCENARIOS.length) usedScenarios.clear();
  let idx, attempts = 0;
  do {
    idx = Math.floor(Math.random() * SCENARIOS.length);
    if (++attempts > 200) break;
  } while (usedScenarios.has(idx));
  usedScenarios.add(idx);
  return SCENARIOS[idx];
}

// ── Render Scenario ───────────────────────────────────────────
function renderScenario(scenario) {
  const emojiEl = document.getElementById('scenarioEmoji');
  const textEl  = document.getElementById('scenarioText');
  const grid    = document.getElementById('choicesGrid');

  if (emojiEl) emojiEl.textContent = scenario.emoji;
  if (textEl)  textEl.textContent  = scenario.text;

  if (!grid) return;
  grid.innerHTML = '';
  scenario.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn ' + (choice.generous ? 'generous' : 'selfish');
    btn.textContent = choice.label;
    btn.addEventListener('click', () => handleChoice(btn, choice, scenario));
    grid.appendChild(btn);
  });
}

// ── Handle Choice ─────────────────────────────────────────────
function handleChoice(btn, choice, scenario) {
  if (roundLocked) return;
  roundLocked = true;

  // Disable all buttons
  document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);

  const feedbackEl = document.getElementById('feedbackMsg');

  if (choice.generous) {
    btn.classList.add('chosen-generous');
    generousCount++;
    playGenerous();

    // Apply to garden
    const result = applyChoiceToGarden(appState, choice.flowers, sessionFlowers);
    const earnedRainbow = updateStreak(appState, true);
    saveState(appState);

    // Feedback
    const praise = randomFrom(GENEROUS_PRAISE);
    if (feedbackEl) {
      feedbackEl.innerHTML = escHtml(praise) + ' <span class="flower-plus bloom">+' + choice.flowers + ' 🌸</span>';
      feedbackEl.className = 'feedback-msg';
    }

    // Animate mini garden + animals
    renderGardenMini(sessionFlowers);
    renderMiniAnimals(appState);

    // Update live flower counter badge
    const flowerBadge = document.getElementById('flowerCountBadge');
    if (flowerBadge) flowerBadge.textContent = '🌸 ' + sessionFlowers.length;

    // Milestone toasts
    if (earnedRainbow) {
      playAnimalUnlock();
      setTimeout(() => showToast('🌈 קשת! 5 בחירות נדיבות ברצף!'), 900);
    } else if (result.newAnimal) {
      playAnimalUnlock();
      setTimeout(() => showToast(result.newAnimal.animal + ' ' + result.newAnimal.name + ' הגיע לגינה!'), 900);
    } else if (result.levelUp) {
      const levelName = GARDEN_LEVELS[result.newLevel].name;
      setTimeout(() => showToast('🎉 הגינה עלתה רמה: ' + levelName + '!'), 900);
    }

  } else {
    btn.classList.add('chosen-selfish');
    selfishCount++;
    playSelfish();
    updateStreak(appState, false);
    saveState(appState);

    if (feedbackEl) {
      feedbackEl.textContent = randomFrom(SELFISH_GENTLE);
      feedbackEl.className = 'feedback-msg selfish';
    }

    // Show what the generous choice would have earned
    const bestChoice = scenario.choices.find(c => c.generous && c.flowers > 0);
    if (bestChoice) {
      setTimeout(() => showToast('💡 בפעם הבאה: "' + bestChoice.label + '"'), 900);
    }
  }

  setTimeout(nextRound, 2500);
}

// ── End Game ──────────────────────────────────────────────────
function endGame() {
  const p1 = appState.players.player1;
  const p2 = appState.players.player2;
  const namesStr = p2 ? (p1 + ' ו' + p2) : p1;
  const pct = roundIdx > 0 ? Math.round((generousCount / roundIdx) * 100) : 0;

  // Title & subtitle
  const titleEl = document.getElementById('endTitle');
  const subEl   = document.getElementById('endSub');
  if (titleEl) {
    if (selfishCount === 0) {
      titleEl.textContent = '🏆 מושלם לגמרי!';
    } else if (pct >= 80) {
      titleEl.textContent = '🎉 כל הכבוד, ' + escHtml(namesStr) + '!';
    } else if (pct >= 50) {
      titleEl.textContent = '💚 טוב! ממשיכים להשתפר!';
    } else {
      titleEl.textContent = '🌱 הגינה מחכה לנו!';
    }
  }
  if (subEl) {
    subEl.textContent = 'ענינו על ' + roundIdx + ' שאלות • ' + pct + '% נדיבות';
  }

  // Stats
  const flEl = document.getElementById('finalFlowers');
  const gnEl = document.getElementById('finalGenerous');
  const sfEl = document.getElementById('finalSelfish');
  if (flEl) flEl.textContent = sessionFlowers.length;
  if (gnEl) gnEl.textContent = generousCount;
  if (sfEl) sfEl.textContent = selfishCount;

  // Garden preview of this session
  renderGardenEnd(sessionFlowers);

  // Milestone message
  const milestoneEl = document.getElementById('milestoneMsg');
  if (milestoneEl) {
    const animals = appState.garden.animals;
    if (animals && animals.length > 0) {
      milestoneEl.textContent = 'חיות בגינה: ' + animals.join(' ');
    } else {
      const needed = 10 - appState.garden.flowers;
      if (needed > 0) {
        milestoneEl.textContent = 'עוד ' + needed + ' פרחים ו🦋 יגיע!';
      }
    }
  }

  // Update session stats
  appState.stats.sessionsPlayed++;
  appState.stats.totalRounds    += roundIdx;
  appState.stats.generousChoices += generousCount;

  // Save to history
  saveSessionToHistory(appState, {
    players: namesStr,
    mode: sessionMode === 'together' ? 'ביחד' : 'לבד',
    rounds: roundIdx,
    generous: generousCount,
    flowersEarned: sessionFlowers.length
  });
  saveState(appState);

  // History table
  const histContainer = document.getElementById('historyContainer');
  if (histContainer) {
    histContainer.innerHTML = renderHistoryHTML(appState.history.slice(1));
  }

  showScreen('screen-end');

  // Confetti if perfect session
  if (selfishCount === 0 && roundIdx >= 5) {
    launchConfetti();
  }
}

// ── Navigation ────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');

  if (id === 'screen-garden') {
    appState = loadState();
    renderGardenFull(appState);
  }
}

function goToStart() {
  stopConfetti();
  appState = loadState();
  const peek = document.getElementById('gardenPeek');
  if (peek) peek.style.display = appState.garden.flowers > 0 ? 'block' : 'none';
  showScreen('screen-start');
}

// ── Reset Game ────────────────────────────────────────────────────────
function confirmReset() {
  const msg = STRINGS['confirm_reset'] || 'למחוק את הגינה כולה ולהתחיל מחדש? לא ניתן לשחזר.';
  if (confirm(msg)) {
    clearState();
    appState = defaultState();
    const peek = document.getElementById('gardenPeek');
    if (peek) peek.style.display = 'none';
    const p1 = document.getElementById('player1Name');
    const p2 = document.getElementById('player2Name');
    if (p1) p1.value = '';
    if (p2) p2.value = '';
  }
}

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg) {
  const el = document.getElementById('toastMsg');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTO);
  toastTO = setTimeout(() => el.classList.remove('show'), 3000);
}

// ── Confetti ──────────────────────────────────────────────────
let confettiAnim = null;
const canvas = document.getElementById('confettiCanvas');
const ctx    = canvas ? canvas.getContext('2d') : null;
let pieces   = [];

function launchConfetti() {
  if (!canvas || !ctx) return;
  playConfetti();
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  pieces = [];
  const colors = ['#4ADE80','#FF6B9D','#FACC15','#C084FC','#7DD3FC','#FB923C','#86efac'];
  for (let i = 0; i < 160; i++) {
    pieces.push({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height - canvas.height,
      w:  Math.floor(Math.random() * 9) + 7,
      h:  Math.floor(Math.random() * 7) + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 6,
      vy: Math.floor(Math.random() * 5) + 3,
      vx: (Math.random() - 0.5) * 3
    });
  }
  animateConfetti();
}

function animateConfetti() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.save();
    ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
    ctx.rotate(p.rot * Math.PI / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
    p.y += p.vy; p.x += p.vx; p.rot += p.rotSpeed;
  });
  pieces = pieces.filter(p => p.y < canvas.height + 20);
  if (pieces.length > 0) {
    confettiAnim = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function stopConfetti() {
  if (confettiAnim) { cancelAnimationFrame(confettiAnim); confettiAnim = null; }
  if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

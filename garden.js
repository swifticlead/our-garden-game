// garden.js — Garden rendering, levels, animal milestones, streaks

// ── Level Config ──────────────────────────────────────────────
const GARDEN_LEVELS = [
  { name: '🌱 זרעים',   min: 0,  emoji: '🌱' },
  { name: '🌿 ניצנים',  min: 10, emoji: '🌿' },
  { name: '🌸 גינה',    min: 25, emoji: '🌸' },
  { name: '🌈 גן עדן',  min: 50, emoji: '🌈' },
];

// ── Animal Milestones ─────────────────────────────────────────
const ANIMAL_MILESTONES = [
  { flowers: 10, animal: '🦋', name: 'פרפר' },
  { flowers: 20, animal: '🐰', name: 'ארנב' },
  { flowers: 30, animal: '🐦', name: 'ציפור' },
  { flowers: 40, animal: '🦊', name: 'שועל' },
  { flowers: 50, animal: '🦄', name: 'חד קרן' },
];

// ── Flower Emoji Pool ─────────────────────────────────────────
const FLOWER_EMOJIS = ['🌸', '🌺', '🌻', '🌷', '🌹', '💐', '🏵️', '🌼', '💮', '🍀', '🪷'];

// ── Get Current Level ─────────────────────────────────────────
function getLevel(flowers) {
  let level = 0;
  for (let i = 0; i < GARDEN_LEVELS.length; i++) {
    if (flowers >= GARDEN_LEVELS[i].min) level = i;
  }
  return level;
}

// ── Check for New Animal Unlocks ──────────────────────────────
// Returns the newly unlocked animal or null
function checkAnimalUnlock(oldFlowers, newFlowers, unlockedAnimals) {
  for (const m of ANIMAL_MILESTONES) {
    if (oldFlowers < m.flowers && newFlowers >= m.flowers) {
      if (!unlockedAnimals.includes(m.animal)) {
        return m;
      }
    }
  }
  return null;
}

// ── Pick a Random Flower Emoji ────────────────────────────────
function randomFlower() {
  return FLOWER_EMOJIS[Math.floor(Math.random() * FLOWER_EMOJIS.length)];
}

// ── Render Mini Animals (shown during game) ───────────────────
function renderMiniAnimals(state) {
  const el = document.getElementById('gardenMiniAnimals');
  if (!el) return;
  const animals = state.garden.animals || [];
  if (animals.length === 0) { el.innerHTML = ''; return; }
  el.innerHTML = animals.map((a, i) => {
    return '<span class="bloom" style="animation-delay:' + (i * 0.05) + 's">' + a + '</span>';
  }).join('');
}

// ── Render Mini Garden (shown during game) ────────────────────
// Shows the flowers earned THIS session only
function renderGardenMini(sessionFlowers) {
  const el = document.getElementById('gardenMini');
  if (!el) return;
  if (sessionFlowers.length === 0) {
    el.innerHTML = '<span style="color:#94A3B8;font-size:0.85rem">הגינה מחכה לפרחים 🌱</span>';
    return;
  }
  el.innerHTML = sessionFlowers.map((f, i) => {
    return '<span class="bloom" style="animation-delay:' + (i * 0.05) + 's">' + f + '</span>';
  }).join('');
}

// ── Render Garden End (shown on end screen) ───────────────────
function renderGardenEnd(sessionFlowers) {
  const el = document.getElementById('gardenEnd');
  if (!el) return;
  if (sessionFlowers.length === 0) {
    el.innerHTML = '<span class="garden-empty">לא הרווחנו פרחים הפעם 🌱<br>בפעם הבאה ננסה!</span>';
    return;
  }
  el.innerHTML = sessionFlowers.map(f => '<span>' + f + '</span>').join('');
}

// ── Render Full Garden (garden view screen) ───────────────────
function renderGardenFull(state) {
  const el = document.getElementById('gardenFull');
  if (!el) return;

  const flowers = state.garden.flowerList || [];
  if (flowers.length === 0) {
    el.innerHTML = '<span class="garden-empty">הגינה ריקה עדיין 🌱<br>שחקו כדי לגדל פרחים!</span>';
  } else {
    el.innerHTML = flowers.map(f => '<span>' + f + '</span>').join('');
  }

  // Level badge
  const level = getLevel(state.garden.flowers);
  const levelEl = document.getElementById('gardenLevelBadge');
  if (levelEl) levelEl.textContent = GARDEN_LEVELS[level].name;

  // Stats
  const statsEl = document.getElementById('gardenStats');
  if (statsEl) {
    const pct = state.stats.totalRounds > 0
      ? Math.round((state.stats.generousChoices / state.stats.totalRounds) * 100)
      : 0;
    statsEl.textContent =
      '🌸 ' + state.garden.flowers + ' פרחים  •  ' +
      '🎮 ' + state.stats.sessionsPlayed + ' משחקים  •  ' +
      '💚 ' + pct + '% נדיבות';
  }

  // Animals
  const animalsEl = document.getElementById('gardenAnimals');
  if (animalsEl) {
    const animals = state.garden.animals || [];
    if (animals.length === 0) {
      animalsEl.innerHTML = '<span style="color:#94A3B8;font-size:0.8rem">חיות יגיעו כש-🌸 = 10</span>';
    } else {
      animalsEl.innerHTML = animals.map(a => '<span>' + a + '</span>').join('');
    }
  }

  // Garden title with player names
  const titleEl = document.getElementById('gardenTitle');
  if (titleEl) {
    const p1 = state.players.player1;
    const p2 = state.players.player2;
    if (p1 && p2) {
      titleEl.textContent = '🌸 הגינה של ' + escHtml(p1) + ' ו' + escHtml(p2);
    } else if (p1) {
      titleEl.textContent = '🌸 הגינה של ' + escHtml(p1);
    } else {
      titleEl.textContent = '🌸 הגינה שלנו';
    }
  }
}

// ── Update Garden After a Choice ─────────────────────────────
// Returns { newAnimal, levelUp } for notifications
function applyChoiceToGarden(state, flowersEarned, sessionFlowers) {
  const oldFlowers = state.garden.flowers;
  state.garden.flowers += flowersEarned;

  // Update flower list
  if (!state.garden.flowerList) state.garden.flowerList = [];
  for (let i = 0; i < flowersEarned; i++) {
    const f = randomFlower();
    state.garden.flowerList.push(f);
    sessionFlowers.push(f);
  }

  // Check level up
  const oldLevel = getLevel(oldFlowers);
  const newLevel = getLevel(state.garden.flowers);
  const levelUp = newLevel > oldLevel;

  // Check new animal
  const newAnimalData = checkAnimalUnlock(oldFlowers, state.garden.flowers, state.garden.animals);
  if (newAnimalData) {
    state.garden.animals.push(newAnimalData.animal);
  }

  return { newAnimal: newAnimalData, levelUp, newLevel };
}

// ── Update Streak ─────────────────────────────────────────────
function updateStreak(state, wasGenerous) {
  if (wasGenerous) {
    state.garden.streak++;
    if (state.garden.streak > state.garden.bestStreak) {
      state.garden.bestStreak = state.garden.streak;
    }
    if (state.garden.streak >= 5 && !state.garden.hasRainbow) {
      state.garden.hasRainbow = true;
      state.garden.flowerList.push('🌈');
      return true; // rainbow earned
    }
  } else {
    state.garden.streak = 0;
  }
  return false;
}

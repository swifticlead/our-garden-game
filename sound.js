// sound.js — Web Audio API sound effects for "הגינה שלנו"

let audioCtx     = null;
let soundEnabled = true;

// ── Init (lazy — created on first user gesture) ───────────────
function initAudio() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      soundEnabled = false;
      return;
    }
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// ── Play a single tone ────────────────────────────────────────
function playTone(freq, duration, type, gain, startDelay) {
  if (!audioCtx) return;
  const osc      = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  osc.type = type;
  const t = audioCtx.currentTime + startDelay;
  osc.frequency.setValueAtTime(freq, t);
  gainNode.gain.setValueAtTime(gain, t);
  gainNode.gain.exponentialRampToValueAtTime(0.001, t + duration);
  osc.start(t);
  osc.stop(t + duration);
}

// ── Generous choice — happy ascending chime (C5→E5→G5) ───────
function playGenerous() {
  if (!soundEnabled) return;
  initAudio();
  playTone(523,  0.12, 'sine', 0.35, 0);
  playTone(659,  0.12, 'sine', 0.35, 0.1);
  playTone(784,  0.18, 'sine', 0.35, 0.2);
}

// ── Selfish choice — soft low tone (E4) ──────────────────────
function playSelfish() {
  if (!soundEnabled) return;
  initAudio();
  playTone(330, 0.2, 'sine', 0.18, 0);
}

// ── Animal unlock — celebration arpeggio (C5→E5→G5→C6) ───────
function playAnimalUnlock() {
  if (!soundEnabled) return;
  initAudio();
  playTone(523,  0.1,  'triangle', 0.4, 0);
  playTone(659,  0.1,  'triangle', 0.4, 0.1);
  playTone(784,  0.1,  'triangle', 0.4, 0.2);
  playTone(1047, 0.25, 'triangle', 0.4, 0.3);
}

// ── Perfect session — fanfare (C5→E5→G5→C6→E6) ───────────────
function playConfetti() {
  if (!soundEnabled) return;
  initAudio();
  playTone(523,  0.1,  'square', 0.22, 0);
  playTone(659,  0.1,  'square', 0.22, 0.1);
  playTone(784,  0.1,  'square', 0.22, 0.2);
  playTone(1047, 0.1,  'square', 0.22, 0.3);
  playTone(1319, 0.3,  'square', 0.18, 0.4);
}

// ── Toggle sound on/off ───────────────────────────────────────
function toggleSound() {
  soundEnabled = !soundEnabled;
  try { localStorage.setItem('soundEnabled', soundEnabled ? '1' : '0'); } catch (e) {}
  updateSoundButtons();
  if (soundEnabled) {
    initAudio();
    playTone(659, 0.1, 'sine', 0.3, 0);
  }
}

// ── Load saved preference ─────────────────────────────────────
function loadSoundPref() {
  try {
    const val = localStorage.getItem('soundEnabled');
    if (val === '0') soundEnabled = false;
  } catch (e) {}
  updateSoundButtons();
}

// ── Sync both toggle button icons ────────────────────────────
function updateSoundButtons() {
  const icon = soundEnabled ? '🔊' : '🔇';
  const btn1 = document.getElementById('soundToggle');
  const btn2 = document.getElementById('soundToggleGame');
  if (btn1) btn1.textContent = icon;
  if (btn2) btn2.textContent = icon;
}

// storage.js — localStorage read/write for "הגינה שלנו"

const STORAGE_KEY = 'ourGarden';

// ── XSS Safety ────────────────────────────────────────────────
function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Default State ─────────────────────────────────────────────
function defaultState() {
  return {
    players: { player1: '', player2: '' },
    garden: {
      flowers: 0,
      level: 0,
      animals: [],
      streak: 0,
      bestStreak: 0,
      hasRainbow: false,
      flowerList: []   // array of flower emojis earned over all time
    },
    stats: {
      sessionsPlayed: 0,
      totalRounds: 0,
      generousChoices: 0
    },
    history: []
  };
}

// ── Load ──────────────────────────────────────────────────────
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // Merge with defaults to handle missing fields in old saves
    const def = defaultState();
    return {
      players: { ...def.players,   ...parsed.players },
      garden:  { ...def.garden,    ...parsed.garden  },
      stats:   { ...def.stats,     ...parsed.stats   },
      history: Array.isArray(parsed.history) ? parsed.history : []
    };
  } catch (e) {
    return defaultState();
  }
}

// ── Save ──────────────────────────────────────────────────────
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // localStorage full or unavailable — silently continue
  }
}

// ── Save Session to History ───────────────────────────────────
function saveSessionToHistory(state, sessionData) {
  const entry = {
    date: todayStr(),
    players: sessionData.players,
    mode: sessionData.mode,
    rounds: sessionData.rounds,
    generous: sessionData.generous,
    flowersEarned: sessionData.flowersEarned
  };
  state.history.unshift(entry);
  if (state.history.length > 10) {
    state.history = state.history.slice(0, 10);
  }
}

// ── History Table HTML ────────────────────────────────────────
function renderHistoryHTML(history) {
  if (!history || history.length === 0) {
    return '<div class="no-history">עדיין אין משחקים קודמים 🌱</div>';
  }
  let html = '<table class="history-table"><thead><tr>' +
    '<th>שחקניות</th><th>סיבובים</th><th>נדיבות</th><th>פרחים</th><th>תאריך</th>' +
    '</tr></thead><tbody>';
  history.forEach(g => {
    const pct = g.rounds > 0 ? Math.round((g.generous / g.rounds) * 100) : 0;
    html += '<tr>' +
      '<td>' + escHtml(g.players) + '</td>' +
      '<td>' + g.rounds + '</td>' +
      '<td><strong>' + pct + '%</strong></td>' +
      '<td>🌸 ' + g.flowersEarned + '</td>' +
      '<td style="font-size:.72rem;color:#aaa">' + escHtml(g.date) + '</td>' +
      '</tr>';
  });
  html += '</tbody></table>';
  return html;
}

// ── Date Helper ───────────────────────────────────────────────
function todayStr() {
  const d = new Date();
  return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
}

// ── Clear State ───────────────────────────────────────────────
function clearState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

// ============================================================
//  themes.js — Theme definitions & switcher for Smart Calc
// ============================================================

const THEMES = {
  space: {
    label: 'Space',
    '--bg-deep':        '#050a14',
    '--bg-mid':         '#080f1e',
    '--glass':          'rgba(255,255,255,0.04)',
    '--glass-border':   'rgba(255,255,255,0.09)',
    '--glass-hover':    'rgba(255,255,255,0.08)',
    '--glass-active':   'rgba(255,255,255,0.14)',
    '--accent':         '#5b9cf6',
    '--accent2':        '#a78bfa',
    '--accent3':        '#34d399',
    '--danger':         '#f87171',
    '--text':           '#e8edf5',
    '--text-dim':       'rgba(232,237,245,0.45)',
    '--text-dimmer':    'rgba(232,237,245,0.22)',
    '--glow':           '0 0 40px rgba(91,156,246,0.12)',
    '--ambient1':       'rgba(91,156,246,0.07)',
    '--ambient2':       'rgba(167,139,250,0.06)',
    '--ambient3':       'rgba(52,211,153,0.03)',
  },

  ember: {
    label: 'Ember',
    '--bg-deep':        '#0f0804',
    '--bg-mid':         '#1a0d06',
    '--glass':          'rgba(255,200,100,0.04)',
    '--glass-border':   'rgba(255,180,80,0.10)',
    '--glass-hover':    'rgba(255,180,80,0.09)',
    '--glass-active':   'rgba(255,180,80,0.16)',
    '--accent':         '#fb923c',
    '--accent2':        '#fbbf24',
    '--accent3':        '#f87171',
    '--danger':         '#ef4444',
    '--text':           '#fef3e2',
    '--text-dim':       'rgba(254,243,226,0.45)',
    '--text-dimmer':    'rgba(254,243,226,0.22)',
    '--glow':           '0 0 40px rgba(251,146,60,0.15)',
    '--ambient1':       'rgba(251,146,60,0.08)',
    '--ambient2':       'rgba(251,191,36,0.05)',
    '--ambient3':       'rgba(248,113,113,0.03)',
  },

  arctic: {
    label: 'Arctic',
    '--bg-deep':        '#f0f4f8',
    '--bg-mid':         '#e2eaf2',
    '--glass':          'rgba(255,255,255,0.55)',
    '--glass-border':   'rgba(148,190,230,0.30)',
    '--glass-hover':    'rgba(255,255,255,0.70)',
    '--glass-active':   'rgba(200,220,240,0.60)',
    '--accent':         '#2563eb',
    '--accent2':        '#7c3aed',
    '--accent3':        '#059669',
    '--danger':         '#dc2626',
    '--text':           '#1e293b',
    '--text-dim':       'rgba(30,41,59,0.55)',
    '--text-dimmer':    'rgba(30,41,59,0.28)',
    '--glow':           '0 0 40px rgba(37,99,235,0.10)',
    '--ambient1':       'rgba(37,99,235,0.06)',
    '--ambient2':       'rgba(124,58,237,0.04)',
    '--ambient3':       'rgba(5,150,105,0.03)',
  },

  obsidian: {
    label: 'Obsidian',
    '--bg-deep':        '#09090b',
    '--bg-mid':         '#0f0f12',
    '--glass':          'rgba(255,255,255,0.03)',
    '--glass-border':   'rgba(255,255,255,0.07)',
    '--glass-hover':    'rgba(255,255,255,0.06)',
    '--glass-active':   'rgba(255,255,255,0.11)',
    '--accent':         '#e4e4e7',
    '--accent2':        '#a1a1aa',
    '--accent3':        '#71717a',
    '--danger':         '#f87171',
    '--text':           '#fafafa',
    '--text-dim':       'rgba(250,250,250,0.40)',
    '--text-dimmer':    'rgba(250,250,250,0.18)',
    '--glow':           '0 0 40px rgba(255,255,255,0.04)',
    '--ambient1':       'rgba(255,255,255,0.03)',
    '--ambient2':       'rgba(255,255,255,0.02)',
    '--ambient3':       'rgba(255,255,255,0.01)',
  },
};

// ---- Active theme key ----
let currentTheme = 'space';

/**
 * Apply a theme by key, updating all CSS custom properties on :root.
 * Also persists the choice to localStorage.
 */
function applyTheme(key) {
  const theme = THEMES[key];
  if (!theme) return;

  currentTheme = key;
  const root = document.documentElement;

  Object.entries(theme).forEach(([prop, val]) => {
    if (prop.startsWith('--')) root.style.setProperty(prop, val);
  });

  // Update ambient gradients via a data-theme attribute (CSS handles the rest)
  root.setAttribute('data-theme', key);

  // Update picker UI active state
  document.querySelectorAll('.theme-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === key);
  });

  // Persist
  try { localStorage.setItem('calc_theme', key); } catch(e) {}
}

/**
 * Build the theme picker UI and inject it into #theme-picker.
 */
function initThemePicker() {
  const picker = document.getElementById('theme-picker');
  if (!picker) return;

  picker.innerHTML = Object.entries(THEMES).map(([key, theme]) => `
    <button
      class="theme-swatch ${key === currentTheme ? 'active' : ''}"
      data-theme="${key}"
      title="${theme.label}"
      onclick="applyTheme('${key}')"
      style="background: ${theme['--accent']};"
    ></button>
  `).join('');
}

/**
 * Load saved theme on startup.
 */
function loadSavedTheme() {
  try {
    const saved = localStorage.getItem('calc_theme');
    if (saved && THEMES[saved]) applyTheme(saved);
    else applyTheme('space');
  } catch(e) {
    applyTheme('space');
  }
}
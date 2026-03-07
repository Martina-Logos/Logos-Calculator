// ============================================================
//  themes.js — 10 bold themes + palette picker UI
// ============================================================

const THEMES = {

  // 1. Midnight Blue (default)
  midnight: {
    label: 'Midnight', emoji: '🌌',
    '--bg-deep':      '#0a0e1a',
    '--bg-mid':       '#0d1526',
    '--glass':        'rgba(255,255,255,0.05)',
    '--glass-border': 'rgba(100,160,255,0.14)',
    '--glass-hover':  'rgba(100,160,255,0.10)',
    '--glass-active': 'rgba(100,160,255,0.20)',
    '--accent':       '#4f8ef7',
    '--accent2':      '#9b7ff4',
    '--accent3':      '#38d9a9',
    '--danger':       '#ff6b6b',
    '--text':         '#e4eaf8',
    '--text-dim':     'rgba(228,234,248,0.45)',
    '--text-dimmer':  'rgba(228,234,248,0.20)',
    '--glow':         '0 0 50px rgba(79,142,247,0.18)',
    '--btn-bg':       '#111827',
    '--btn-shadow':   '4px 4px 10px rgba(0,0,0,0.5), -2px -2px 6px rgba(255,255,255,0.03)',
    '--ambient1':     'rgba(79,142,247,0.08)',
    '--ambient2':     'rgba(155,127,244,0.06)',
    '--ambient3':     'rgba(56,217,169,0.04)',
    '--swatch':       'linear-gradient(135deg,#4f8ef7,#9b7ff4)',
  },

  // 2. Neon Sunset
  sunset: {
    label: 'Sunset', emoji: '🌅',
    '--bg-deep':      '#12060f',
    '--bg-mid':       '#1c0a16',
    '--glass':        'rgba(255,100,150,0.05)',
    '--glass-border': 'rgba(255,100,150,0.16)',
    '--glass-hover':  'rgba(255,100,150,0.10)',
    '--glass-active': 'rgba(255,100,150,0.22)',
    '--accent':       '#ff4d8d',
    '--accent2':      '#ff8c42',
    '--accent3':      '#ffd166',
    '--danger':       '#ff4444',
    '--text':         '#ffe8f0',
    '--text-dim':     'rgba(255,232,240,0.45)',
    '--text-dimmer':  'rgba(255,232,240,0.20)',
    '--glow':         '0 0 50px rgba(255,77,141,0.22)',
    '--btn-bg':       '#1e0d18',
    '--btn-shadow':   '4px 4px 10px rgba(0,0,0,0.6), -2px -2px 6px rgba(255,100,150,0.04)',
    '--ambient1':     'rgba(255,77,141,0.10)',
    '--ambient2':     'rgba(255,140,66,0.07)',
    '--ambient3':     'rgba(255,209,102,0.04)',
    '--swatch':       'linear-gradient(135deg,#ff4d8d,#ff8c42)',
  },

  // 3. Cyber Green
  cyber: {
    label: 'Cyber', emoji: '⚡',
    '--bg-deep':      '#030d07',
    '--bg-mid':       '#061410',
    '--glass':        'rgba(0,255,140,0.04)',
    '--glass-border': 'rgba(0,255,140,0.14)',
    '--glass-hover':  'rgba(0,255,140,0.09)',
    '--glass-active': 'rgba(0,255,140,0.18)',
    '--accent':       '#00ff8c',
    '--accent2':      '#00e5ff',
    '--accent3':      '#b4ff6e',
    '--danger':       '#ff4444',
    '--text':         '#d0ffe8',
    '--text-dim':     'rgba(208,255,232,0.45)',
    '--text-dimmer':  'rgba(208,255,232,0.20)',
    '--glow':         '0 0 50px rgba(0,255,140,0.20)',
    '--btn-bg':       '#071410',
    '--btn-shadow':   '4px 4px 10px rgba(0,0,0,0.6), -2px -2px 6px rgba(0,255,140,0.04)',
    '--ambient1':     'rgba(0,255,140,0.08)',
    '--ambient2':     'rgba(0,229,255,0.06)',
    '--ambient3':     'rgba(180,255,110,0.03)',
    '--swatch':       'linear-gradient(135deg,#00ff8c,#00e5ff)',
  },

  // 4. Royal Gold
  gold: {
    label: 'Gold', emoji: '👑',
    '--bg-deep':      '#0d0900',
    '--bg-mid':       '#160e00',
    '--glass':        'rgba(255,200,50,0.05)',
    '--glass-border': 'rgba(255,200,50,0.16)',
    '--glass-hover':  'rgba(255,200,50,0.10)',
    '--glass-active': 'rgba(255,200,50,0.20)',
    '--accent':       '#f5c518',
    '--accent2':      '#ff9f0a',
    '--accent3':      '#ffd60a',
    '--danger':       '#ff4444',
    '--text':         '#fff8e1',
    '--text-dim':     'rgba(255,248,225,0.45)',
    '--text-dimmer':  'rgba(255,248,225,0.20)',
    '--glow':         '0 0 50px rgba(245,197,24,0.20)',
    '--btn-bg':       '#160e00',
    '--btn-shadow':   '4px 4px 10px rgba(0,0,0,0.6), -2px -2px 6px rgba(245,197,24,0.05)',
    '--ambient1':     'rgba(245,197,24,0.09)',
    '--ambient2':     'rgba(255,159,10,0.06)',
    '--ambient3':     'rgba(255,214,10,0.04)',
    '--swatch':       'linear-gradient(135deg,#f5c518,#ff9f0a)',
  },

  // 5. Ocean Deep
  ocean: {
    label: 'Ocean', emoji: '🌊',
    '--bg-deep':      '#020b14',
    '--bg-mid':       '#041525',
    '--glass':        'rgba(0,180,220,0.05)',
    '--glass-border': 'rgba(0,180,220,0.15)',
    '--glass-hover':  'rgba(0,180,220,0.10)',
    '--glass-active': 'rgba(0,180,220,0.20)',
    '--accent':       '#00b4dc',
    '--accent2':      '#0077b6',
    '--accent3':      '#48cae4',
    '--danger':       '#ff6b6b',
    '--text':         '#caf0f8',
    '--text-dim':     'rgba(202,240,248,0.45)',
    '--text-dimmer':  'rgba(202,240,248,0.20)',
    '--glow':         '0 0 50px rgba(0,180,220,0.18)',
    '--btn-bg':       '#041525',
    '--btn-shadow':   '4px 4px 10px rgba(0,0,0,0.55), -2px -2px 6px rgba(0,180,220,0.04)',
    '--ambient1':     'rgba(0,180,220,0.08)',
    '--ambient2':     'rgba(0,119,182,0.06)',
    '--ambient3':     'rgba(72,202,228,0.04)',
    '--swatch':       'linear-gradient(135deg,#00b4dc,#0077b6)',
  },

  // 6. Sakura / Cherry Blossom
  sakura: {
    label: 'Sakura', emoji: '🌸',
    '--bg-deep':      '#100610',
    '--bg-mid':       '#1a0c1a',
    '--glass':        'rgba(255,160,200,0.05)',
    '--glass-border': 'rgba(255,160,200,0.16)',
    '--glass-hover':  'rgba(255,160,200,0.10)',
    '--glass-active': 'rgba(255,160,200,0.20)',
    '--accent':       '#ff80b5',
    '--accent2':      '#da77f2',
    '--accent3':      '#ff9fad',
    '--danger':       '#ff4d4d',
    '--text':         '#ffe4f0',
    '--text-dim':     'rgba(255,228,240,0.45)',
    '--text-dimmer':  'rgba(255,228,240,0.20)',
    '--glow':         '0 0 50px rgba(255,128,181,0.22)',
    '--btn-bg':       '#1a0c1a',
    '--btn-shadow':   '4px 4px 10px rgba(0,0,0,0.55), -2px -2px 6px rgba(255,128,181,0.04)',
    '--ambient1':     'rgba(255,128,181,0.10)',
    '--ambient2':     'rgba(218,119,242,0.07)',
    '--ambient3':     'rgba(255,159,173,0.04)',
    '--swatch':       'linear-gradient(135deg,#ff80b5,#da77f2)',
  },

  // 7. Arctic White (light)
  arctic: {
    label: 'Arctic', emoji: '❄️',
    '--bg-deep':      '#edf2f7',
    '--bg-mid':       '#e2e8f0',
    '--glass':        'rgba(255,255,255,0.60)',
    '--glass-border': 'rgba(150,190,230,0.35)',
    '--glass-hover':  'rgba(255,255,255,0.75)',
    '--glass-active': 'rgba(200,220,240,0.65)',
    '--accent':       '#2563eb',
    '--accent2':      '#7c3aed',
    '--accent3':      '#059669',
    '--danger':       '#dc2626',
    '--text':         '#1e293b',
    '--text-dim':     'rgba(30,41,59,0.55)',
    '--text-dimmer':  'rgba(30,41,59,0.28)',
    '--glow':         '0 0 40px rgba(37,99,235,0.12)',
    '--btn-bg':       '#f8fafc',
    '--btn-shadow':   '5px 5px 12px rgba(163,177,198,0.6), -4px -4px 10px rgba(255,255,255,0.9)',
    '--ambient1':     'rgba(37,99,235,0.06)',
    '--ambient2':     'rgba(124,58,237,0.04)',
    '--ambient3':     'rgba(5,150,105,0.03)',
    '--swatch':       'linear-gradient(135deg,#2563eb,#7c3aed)',
  },

  // 8. Lava / Volcanic
  lava: {
    label: 'Lava', emoji: '🌋',
    '--bg-deep':      '#0c0300',
    '--bg-mid':       '#180500',
    '--glass':        'rgba(255,80,0,0.05)',
    '--glass-border': 'rgba(255,80,0,0.16)',
    '--glass-hover':  'rgba(255,80,0,0.10)',
    '--glass-active': 'rgba(255,80,0,0.20)',
    '--accent':       '#ff4500',
    '--accent2':      '#ff7300',
    '--accent3':      '#ffb347',
    '--danger':       '#ff1a1a',
    '--text':         '#ffe8d6',
    '--text-dim':     'rgba(255,232,214,0.45)',
    '--text-dimmer':  'rgba(255,232,214,0.20)',
    '--glow':         '0 0 50px rgba(255,69,0,0.25)',
    '--btn-bg':       '#180500',
    '--btn-shadow':   '4px 4px 10px rgba(0,0,0,0.65), -2px -2px 6px rgba(255,80,0,0.04)',
    '--ambient1':     'rgba(255,69,0,0.12)',
    '--ambient2':     'rgba(255,115,0,0.08)',
    '--ambient3':     'rgba(255,179,71,0.04)',
    '--swatch':       'linear-gradient(135deg,#ff4500,#ff7300)',
  },

  // 9. Forest / Moss
  forest: {
    label: 'Forest', emoji: '🌿',
    '--bg-deep':      '#030d05',
    '--bg-mid':       '#051409',
    '--glass':        'rgba(80,200,100,0.05)',
    '--glass-border': 'rgba(80,200,100,0.15)',
    '--glass-hover':  'rgba(80,200,100,0.09)',
    '--glass-active': 'rgba(80,200,100,0.18)',
    '--accent':       '#4ade80',
    '--accent2':      '#86efac',
    '--accent3':      '#bef264',
    '--danger':       '#ff6b6b',
    '--text':         '#dcfce7',
    '--text-dim':     'rgba(220,252,231,0.45)',
    '--text-dimmer':  'rgba(220,252,231,0.20)',
    '--glow':         '0 0 50px rgba(74,222,128,0.18)',
    '--btn-bg':       '#051409',
    '--btn-shadow':   '4px 4px 10px rgba(0,0,0,0.6), -2px -2px 6px rgba(74,222,128,0.04)',
    '--ambient1':     'rgba(74,222,128,0.08)',
    '--ambient2':     'rgba(134,239,172,0.05)',
    '--ambient3':     'rgba(190,242,100,0.03)',
    '--swatch':       'linear-gradient(135deg,#4ade80,#86efac)',
  },

  // 10. Obsidian (pure dark mono)
  obsidian: {
    label: 'Obsidian', emoji: '🖤',
    '--bg-deep':      '#080808',
    '--bg-mid':       '#111111',
    '--glass':        'rgba(255,255,255,0.04)',
    '--glass-border': 'rgba(255,255,255,0.09)',
    '--glass-hover':  'rgba(255,255,255,0.07)',
    '--glass-active': 'rgba(255,255,255,0.13)',
    '--accent':       '#e2e2e2',
    '--accent2':      '#a0a0a0',
    '--accent3':      '#666666',
    '--danger':       '#ff6b6b',
    '--text':         '#f5f5f5',
    '--text-dim':     'rgba(245,245,245,0.40)',
    '--text-dimmer':  'rgba(245,245,245,0.18)',
    '--glow':         '0 0 40px rgba(255,255,255,0.05)',
    '--btn-bg':       '#111111',
    '--btn-shadow':   '4px 4px 12px rgba(0,0,0,0.8), -2px -2px 6px rgba(255,255,255,0.03)',
    '--ambient1':     'rgba(255,255,255,0.03)',
    '--ambient2':     'rgba(255,255,255,0.02)',
    '--ambient3':     'rgba(255,255,255,0.01)',
    '--swatch':       'linear-gradient(135deg,#444,#111)',
  },
};

// ---- Active theme ----
let currentTheme = 'midnight';
let pickerOpen   = false;

// ============================================================
//  applyTheme
// ============================================================
function applyTheme(key) {
  const theme = THEMES[key];
  if (!theme) return;

  currentTheme = key;
  const root   = document.documentElement;

  Object.entries(theme).forEach(([prop, val]) => {
    if (prop.startsWith('--')) root.style.setProperty(prop, val);
  });

  root.setAttribute('data-theme', key);

  // Update swatch active states
  document.querySelectorAll('.tp-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === key);
  });

  // Close picker after selection
  closeThemePicker();

  try { localStorage.setItem('calc_theme', key); } catch(e) {}
}

// ============================================================
//  Picker open / close
// ============================================================
function toggleThemePicker(e) {
  e.stopPropagation();
  pickerOpen ? closeThemePicker() : openThemePicker();
}

function openThemePicker() {
  pickerOpen = true;
  const panel = document.getElementById('theme-panel');
  if (panel) {
    panel.classList.add('open');
  }
  // Close when clicking outside
  setTimeout(() => document.addEventListener('click', outsidePickerClose), 10);
}

function closeThemePicker() {
  pickerOpen = false;
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.remove('open');
  document.removeEventListener('click', outsidePickerClose);
}

function outsidePickerClose(e) {
  const panel = document.getElementById('theme-panel');
  const btn   = document.getElementById('palette-btn');
  if (panel && !panel.contains(e.target) && btn && !btn.contains(e.target)) {
    closeThemePicker();
  }
}

// ============================================================
//  initThemePicker — build the panel DOM
// ============================================================
function initThemePicker() {
  const picker = document.getElementById('theme-picker');
  if (!picker) return;

  picker.innerHTML = `
    <!-- Trigger button -->
    <button id="palette-btn" onclick="toggleThemePicker(event)" title="Choose theme" aria-label="Open theme picker">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="8.5" cy="10" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="15.5" cy="10" r="1.5" fill="currentColor" stroke="none"/>
        <path d="M12 21a4 4 0 0 0 4-4c0-2-2-3-4-3s-4 1-4 3a4 4 0 0 0 4 4z"/>
        <path d="M6.5 15.5 Q 12 8 17.5 15.5"/>
      </svg>
    </button>

    <!-- Floating panel -->
    <div id="theme-panel" onclick="event.stopPropagation()">
      <div class="tp-header">
        <span>Choose a theme</span>
        <button class="tp-close" onclick="closeThemePicker()">✕</button>
      </div>
      <div class="tp-grid">
        ${Object.entries(THEMES).map(([key, t]) => `
          <button
            class="tp-swatch ${key === currentTheme ? 'active' : ''}"
            data-theme="${key}"
            onclick="applyTheme('${key}')"
            title="${t.label}"
            style="--swatch-grad: ${t['--swatch']};"
          >
            <span class="tp-swatch-dot" style="background: ${t['--swatch']};"></span>
            <span class="tp-swatch-label">${t.emoji} ${t.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================================
//  Load saved theme
// ============================================================
function loadSavedTheme() {
  try {
    const saved = localStorage.getItem('calc_theme');
    applyTheme(saved && THEMES[saved] ? saved : 'midnight');
  } catch(e) {
    applyTheme('midnight');
  }
}

// ============================================================
//  DARK / LIGHT MODE TOGGLE
// ============================================================

// Light mode overrides — soft neumorphic whites per theme accent
const LIGHT_OVERRIDES = {
  midnight: { bg: '#eef2fb', mid: '#e4eaf5', btnBg: '#eef2fb', btnShadow: '5px 5px 14px rgba(163,177,198,0.65), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#3b7de8', accent2: '#7c5ff0', accent3: '#10b981', text: '#1e2a4a', textDim: 'rgba(30,42,74,0.5)', textDimmer: 'rgba(30,42,74,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(60,120,220,0.18)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(200,215,245,0.65)', glow: '0 0 30px rgba(59,125,232,0.12)' },
  sunset:   { bg: '#fdf0f5', mid: '#f7e2ec', btnBg: '#fdf0f5', btnShadow: '5px 5px 14px rgba(210,160,185,0.55), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#e8366e', accent2: '#e8722a', accent3: '#f5a623', text: '#3d0f22', textDim: 'rgba(61,15,34,0.5)', textDimmer: 'rgba(61,15,34,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(232,54,110,0.18)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(245,210,225,0.65)', glow: '0 0 30px rgba(232,54,110,0.12)' },
  cyber:    { bg: '#edfdf6', mid: '#daf7ec', btnBg: '#edfdf6', btnShadow: '5px 5px 14px rgba(150,210,185,0.55), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#00a86b', accent2: '#0097b2', accent3: '#5db52b', text: '#062e1a', textDim: 'rgba(6,46,26,0.5)', textDimmer: 'rgba(6,46,26,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(0,168,107,0.20)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(200,245,225,0.65)', glow: '0 0 30px rgba(0,168,107,0.12)' },
  gold:     { bg: '#fdf8e8', mid: '#f7f0d0', btnBg: '#fdf8e8', btnShadow: '5px 5px 14px rgba(200,180,100,0.5), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#c49a00', accent2: '#d97706', accent3: '#b45309', text: '#2d1f00', textDim: 'rgba(45,31,0,0.5)', textDimmer: 'rgba(45,31,0,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(196,154,0,0.20)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(245,235,190,0.65)', glow: '0 0 30px rgba(196,154,0,0.12)' },
  ocean:    { bg: '#eaf8fc', mid: '#d4f1f8', btnBg: '#eaf8fc', btnShadow: '5px 5px 14px rgba(140,195,215,0.55), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#0089a8', accent2: '#005f8a', accent3: '#2aa5bc', text: '#02202e', textDim: 'rgba(2,32,46,0.5)', textDimmer: 'rgba(2,32,46,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(0,137,168,0.20)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(195,235,248,0.65)', glow: '0 0 30px rgba(0,137,168,0.12)' },
  sakura:   { bg: '#fdf2f8', mid: '#f8e4f2', btnBg: '#fdf2f8', btnShadow: '5px 5px 14px rgba(210,160,195,0.55), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#c7457a', accent2: '#9b4cbf', accent3: '#d4607a', text: '#3a0a22', textDim: 'rgba(58,10,34,0.5)', textDimmer: 'rgba(58,10,34,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(199,69,122,0.18)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(245,210,235,0.65)', glow: '0 0 30px rgba(199,69,122,0.12)' },
  arctic:   { bg: '#edf2f7', mid: '#e2e8f0', btnBg: '#f0f4f8', btnShadow: '5px 5px 14px rgba(163,177,198,0.65), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#2563eb', accent2: '#7c3aed', accent3: '#059669', text: '#1e293b', textDim: 'rgba(30,41,59,0.55)', textDimmer: 'rgba(30,41,59,0.28)', glass: 'rgba(255,255,255,0.60)', glassBorder: 'rgba(148,190,230,0.35)', glassHover: 'rgba(255,255,255,0.78)', glassActive: 'rgba(200,220,240,0.68)', glow: '0 0 30px rgba(37,99,235,0.10)' },
  lava:     { bg: '#fdf0ea', mid: '#f7e0d5', btnBg: '#fdf0ea', btnShadow: '5px 5px 14px rgba(215,150,120,0.55), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#cc3300', accent2: '#d45a00', accent3: '#c47f00', text: '#2e0900', textDim: 'rgba(46,9,0,0.5)', textDimmer: 'rgba(46,9,0,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(204,51,0,0.20)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(245,215,200,0.65)', glow: '0 0 30px rgba(204,51,0,0.12)' },
  forest:   { bg: '#edfaf2', mid: '#daf5e8', btnBg: '#edfaf2', btnShadow: '5px 5px 14px rgba(140,205,165,0.55), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#16a34a', accent2: '#4d8c30', accent3: '#7aad18', text: '#052e12', textDim: 'rgba(5,46,18,0.5)', textDimmer: 'rgba(5,46,18,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(22,163,74,0.20)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(195,245,215,0.65)', glow: '0 0 30px rgba(22,163,74,0.12)' },
  obsidian: { bg: '#f2f2f2', mid: '#e8e8e8', btnBg: '#f2f2f2', btnShadow: '5px 5px 14px rgba(170,170,170,0.6), -4px -4px 10px rgba(255,255,255,0.95)', accent: '#333333', accent2: '#666666', accent3: '#999999', text: '#111111', textDim: 'rgba(17,17,17,0.5)', textDimmer: 'rgba(17,17,17,0.25)', glass: 'rgba(255,255,255,0.55)', glassBorder: 'rgba(100,100,100,0.20)', glassHover: 'rgba(255,255,255,0.75)', glassActive: 'rgba(220,220,220,0.65)', glow: '0 0 30px rgba(0,0,0,0.08)' },
};

let isDarkMode = true;

function toggleDarkLight() {
  isDarkMode = !isDarkMode;
  const toggle = document.getElementById('mode-toggle');
  if (toggle) toggle.classList.toggle('light', !isDarkMode);
  applyTheme(currentTheme); // re-apply with new mode
  try { localStorage.setItem('calc_light_mode', isDarkMode ? '0' : '1'); } catch(e) {}
}

// Patch applyTheme to handle light mode overrides
const _applyThemeOriginal = applyTheme;

// Override applyTheme to inject light mode vars
function applyTheme(key) {
  const theme = THEMES[key];
  if (!theme) return;

  currentTheme = key;
  const root   = document.documentElement;

  // Apply base dark theme vars
  Object.entries(theme).forEach(([prop, val]) => {
    if (prop.startsWith('--')) root.style.setProperty(prop, val);
  });

  // If light mode, override with light palette
  if (!isDarkMode) {
    const light = LIGHT_OVERRIDES[key];
    if (light) {
      root.style.setProperty('--bg-deep',       light.bg);
      root.style.setProperty('--bg-mid',        light.mid);
      root.style.setProperty('--btn-bg',        light.btnBg);
      root.style.setProperty('--btn-shadow',    light.btnShadow);
      root.style.setProperty('--accent',        light.accent);
      root.style.setProperty('--accent2',       light.accent2);
      root.style.setProperty('--accent3',       light.accent3);
      root.style.setProperty('--text',          light.text);
      root.style.setProperty('--text-dim',      light.textDim);
      root.style.setProperty('--text-dimmer',   light.textDimmer);
      root.style.setProperty('--glass',         light.glass);
      root.style.setProperty('--glass-border',  light.glassBorder);
      root.style.setProperty('--glass-hover',   light.glassHover);
      root.style.setProperty('--glass-active',  light.glassActive);
      root.style.setProperty('--glow',          light.glow);
      root.style.setProperty('--ambient1',      'rgba(0,0,0,0.02)');
      root.style.setProperty('--ambient2',      'rgba(0,0,0,0.015)');
      root.style.setProperty('--ambient3',      'rgba(0,0,0,0.01)');
    }
    root.setAttribute('data-mode', 'light');
  } else {
    root.setAttribute('data-mode', 'dark');
  }

  root.setAttribute('data-theme', key);

  document.querySelectorAll('.tp-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === key);
  });

  closeThemePicker();
  try { localStorage.setItem('calc_theme', key); } catch(e) {}
}

// Patch loadSavedTheme to restore light mode state
const _loadSavedThemeOriginal = loadSavedTheme;
function loadSavedTheme() {
  try {
    const savedLight = localStorage.getItem('calc_light_mode');
    if (savedLight === '1') {
      isDarkMode = false;
      const toggle = document.getElementById('mode-toggle');
      if (toggle) toggle.classList.add('light');
    }
    const saved = localStorage.getItem('calc_theme');
    applyTheme(saved && THEMES[saved] ? saved : 'midnight');
  } catch(e) {
    applyTheme('midnight');
  }
}
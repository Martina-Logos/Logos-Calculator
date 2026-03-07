// ============================================================
//  script.js — Calculator logic for Smart Calc
//  Depends on: storage.js, themes.js (loaded before this)
// ============================================================

// ---- STATE ----
let current        = '0';
let expression     = '';
let justCalculated = false;
let history        = [];
let mode           = 'basic';

// ---- DOM REFS ----
const displayMain = document.getElementById('display-main');
const displayExpr = document.getElementById('display-expr');

// ============================================================
//  INIT
// ============================================================
function init() {
  // Theme (from storage.js)
  const savedTheme = Storage.getTheme();
  applyTheme(savedTheme);       // themes.js
  initThemePicker();            // themes.js

  // Mode
  const savedMode = Storage.getMode();
  if (savedMode === 'sci') setMode('sci');

  // History
  history = Storage.getHistory();
  renderHistory();

  updateDisplay('0', '');
}

// ============================================================
//  DISPLAY
// ============================================================
function updateDisplay(val, expr) {
  const len = String(val).length;
  displayMain.style.fontSize =
    len > 14 ? '18px' :
    len > 10 ? '26px' :
    len > 7  ? '34px' : '48px';
  displayMain.textContent = val;
  displayExpr.textContent = expr || '\u00a0';
}

function popAnimation() {
  displayMain.classList.remove('pop');
  void displayMain.offsetWidth;
  displayMain.classList.add('pop');
}

// ============================================================
//  NUMBER INPUT
// ============================================================
function inputNum(n) {
  if (justCalculated) {
    current        = (n === '.') ? '0.' : n;
    expression     = '';
    justCalculated = false;
  } else {
    if (current === '0' && n !== '.') current = n;
    else if (current.length < 15)     current += n;
  }
  updateDisplay(current, formatExpr(expression));
  triggerRipple(event);
}

function inputDecimal() {
  if (justCalculated) { current = '0.'; expression = ''; justCalculated = false; }
  if (!current.includes('.')) current += '.';
  updateDisplay(current, formatExpr(expression));
  triggerRipple(event);
}

// ============================================================
//  OPERATOR INPUT
// ============================================================
function inputOp(op) {
  justCalculated = false;

  if (!expression) {
    expression = current + op;
  } else if (/[+\-*/]$/.test(expression)) {
    expression = expression.slice(0, -1) + op;
  } else {
    expression = expression + op;
  }

  current = '0';
  updateDisplay('0', formatExpr(expression));
  triggerRipple(event);
}

// ============================================================
//  CALCULATE
// ============================================================
function calculate() {
  if (!expression) return;

  const fullExpr      = expression + current;
  const displayedExpr = formatExpr(fullExpr);

  try {
    if (/[^0-9+\-*/.() ]/.test(fullExpr)) throw new Error('Invalid input');

    const divParts = fullExpr.split('/');
    for (let i = 1; i < divParts.length; i++) {
      if (parseFloat(divParts[i]) === 0) throw new Error('÷ 0');
    }

    // eslint-disable-next-line no-new-func
    let result = Function('"use strict"; return (' + fullExpr + ')')();

    if (!isFinite(result)) throw new Error('Overflow');
    if (isNaN(result))     throw new Error('Invalid');

    result = parseFloat(result.toPrecision(12));

    addHistory(displayedExpr, result);
    expression     = '';
    current        = String(result);
    justCalculated = true;

    popAnimation();
    displayMain.classList.remove('error');
    updateDisplay(formatNumber(result), displayedExpr + ' =');

  } catch (err) {
    showError(err.message === '÷ 0' ? 'Division by Zero' : (err.message || 'Error'), displayedExpr);
  }

  triggerRipple(event);
}

// ============================================================
//  CLEAR / DELETE
// ============================================================
function clearAll() {
  current        = '0';
  expression     = '';
  justCalculated = false;
  displayMain.classList.remove('error');
  updateDisplay('0', '');
  triggerRipple(event);
}

function deleteLast() {
  if (justCalculated) { clearAll(); return; }
  current = current.length > 1 ? current.slice(0, -1) : '0';
  updateDisplay(current, formatExpr(expression));
}

// ============================================================
//  SIGN / PERCENT
// ============================================================
function toggleSign() {
  current = String(parseFloat(current) * -1);
  updateDisplay(current, formatExpr(expression));
  triggerRipple(event);
}

function percentage() {
  current = String(parseFloat(current) / 100);
  updateDisplay(current, formatExpr(expression));
  triggerRipple(event);
}

// ============================================================
//  SCIENTIFIC MODE
// ============================================================
function sciAction(action) {
  const val = parseFloat(current);
  let result, label;

  try {
    switch (action) {
      case 'sqrt':
        if (val < 0) throw new Error('√ of negative');
        result = Math.sqrt(val);       label = `√(${val})`;     break;
      case 'pow2':
        result = Math.pow(val, 2);     label = `${val}²`;       break;
      case 'pow3':
        result = Math.pow(val, 3);     label = `${val}³`;       break;
      case 'powN':
        expression = current + '**'; current = '0'; justCalculated = false;
        updateDisplay('0', formatExpr(expression)); return;
      case 'log':
        if (val <= 0) throw new Error('log of ≤ 0');
        result = Math.log10(val);      label = `log(${val})`;   break;
      case 'ln':
        if (val <= 0) throw new Error('ln of ≤ 0');
        result = Math.log(val);        label = `ln(${val})`;    break;
      case 'exp':
        result = Math.exp(val);        label = `e^${val}`;      break;
      case 'pi':
        current = String(Math.PI);
        updateDisplay(current, formatExpr(expression)); return;
      case 'sin':
        result = Math.sin(toRad(val)); label = `sin(${val}°)`;  break;
      case 'cos':
        result = Math.cos(toRad(val)); label = `cos(${val}°)`;  break;
      case 'tan':
        if (val % 180 === 90) throw new Error('tan undefined');
        result = Math.tan(toRad(val)); label = `tan(${val}°)`;  break;
      case 'inv':
        if (val === 0) throw new Error('1/0 undefined');
        result = 1 / val;             label = `1/${val}`;       break;
      default:
        throw new Error('Unknown operation');
    }

    result         = parseFloat(result.toPrecision(10));
    justCalculated = true;
    current        = String(result);
    addHistory(label, result);
    popAnimation();
    updateDisplay(formatNumber(result), label + ' =');

  } catch (err) {
    showError(err.message || 'Error', '');
  }

  triggerRipple(event);
}

// ============================================================
//  MODE TOGGLE
// ============================================================
function setMode(m) {
  mode = m;
  const sciPanel = document.getElementById('sci-panel');
  const basicBtn = document.getElementById('btn-basic-mode');
  const sciBtn   = document.getElementById('btn-sci-mode');
  const isSci    = (m === 'sci');

  sciPanel.classList.toggle('open',   isSci);
  sciBtn.classList.toggle('active',   isSci);
  basicBtn.classList.toggle('active', !isSci);

  Storage.saveMode(m);   // persist via storage.js
}

// ============================================================
//  HISTORY  — all persistence delegated to storage.js
// ============================================================
function addHistory(expr, result) {
  const entry = { expr, result, time: Date.now() };
  history.unshift(entry);
  if (history.length > 30) history.pop();
  Storage.saveHistory(history);
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById('history-list');
  if (!history.length) {
    list.innerHTML = '<div class="history-empty">No calculations yet.<br>Results appear here.</div>';
    return;
  }
  list.innerHTML = history.map((item, i) => `
    <div class="history-item" onclick="useHistoryResult(${i})" style="animation-delay:${i * 0.04}s">
      <div class="history-expr">${item.expr}</div>
      <div class="history-result"><span>=</span>${formatNumber(item.result)}</div>
    </div>
  `).join('');
}

function useHistoryResult(i) {
  current        = String(history[i].result);
  expression     = '';
  justCalculated = true;
  popAnimation();
  updateDisplay(current, '← from history');
}

function clearHistory() {
  history = [];
  Storage.clearHistory();
  renderHistory();
}

// ============================================================
//  KEYBOARD SUPPORT
// ============================================================
document.addEventListener('keydown', (e) => {
  const key        = e.key;
  const intercepted = ['+','-','*','/','Enter','=','Escape','Backspace','%'];
  if (intercepted.includes(key) || /^[0-9.]$/.test(key)) e.preventDefault();

  if      (/^[0-9]$/.test(key))           inputNum(key);
  else if (key === '.')                    inputDecimal();
  else if (key === '+')                    inputOp('+');
  else if (key === '-')                    inputOp('-');
  else if (key === '*')                    inputOp('*');
  else if (key === '/')                    inputOp('/');
  else if (key === 'Enter' || key === '=') calculate();
  else if (key === 'Backspace')            deleteLast();
  else if (key === 'Escape')               clearAll();
  else if (key === '%')                    percentage();

  flashDisplay();
});

function flashDisplay() {
  displayMain.style.textShadow = '0 0 22px var(--accent)';
  setTimeout(() => { displayMain.style.textShadow = ''; }, 140);
}

// ============================================================
//  RIPPLE
// ============================================================
function triggerRipple(e) {
  if (!e || !e.currentTarget) return;
  const btn  = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x    = (e.clientX ?? rect.left + rect.width  / 2) - rect.left - size / 2;
  const y    = (e.clientY ?? rect.top  + rect.height / 2) - rect.top  - size / 2;
  const ripple       = document.createElement('span');
  ripple.className   = 'ripple';
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

// ============================================================
//  ERROR
// ============================================================
function showError(msg, expr) {
  displayMain.classList.add('error', 'shake');
  displayMain.textContent = msg;
  displayExpr.textContent = expr || '\u00a0';
  setTimeout(() => {
    displayMain.classList.remove('error', 'shake');
    updateDisplay(current, formatExpr(expression));
  }, 1800);
}

// ============================================================
//  HELPERS
// ============================================================
function toRad(deg) { return deg * (Math.PI / 180); }

function formatNumber(n) {
  if (Math.abs(n) >= 1e12 || (Math.abs(n) < 1e-6 && n !== 0)) return n.toExponential(4);
  return n.toLocaleString('en-US', { maximumFractionDigits: 8 }).replace(/,/g, '');
}

function formatExpr(expr) {
  return expr.replace(/\*\*/g, '^').replace(/\*/g, '×').replace(/\//g, '÷').replace(/-/g, '−');
}

// ---- Boot ----
document.addEventListener('DOMContentLoaded', init);
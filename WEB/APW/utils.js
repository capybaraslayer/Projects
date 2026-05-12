// ─── VALIDATION ───
function isValidEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// ─── SIMPLE HASH (demo-only, not cryptographically secure) ───
function simpleHash(str, salt) {
  let h = 0;
  const s = str + salt;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h.toString(36);
}

// ─── FORM ERRORS ───
function showErr(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach(e => e.textContent = '');
  document.querySelectorAll('.alert').forEach(e => e.innerHTML = '');
}

function showAlert(id, type, msg) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = `<div class="alert alert-${type === 'error' ? 'error' : 'success'}">${msg}</div>`;
  }
}

// ─── TOAST ───
let toastTimer;
function showToast(msg, type = 'info') {
  const t = document.getElementById('toast');
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  t.innerHTML = `<span>${icons[type] || ''}</span> ${msg}`;
  t.className = 'show ' + (type !== 'info' ? type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = ''; }, 3500);
}

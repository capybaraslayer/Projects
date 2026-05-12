// ─── NAVIGATION / ROUTER ───
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo(0, 0);

  // Run page init hooks
  if (page === 'dashboard') initDashboard();
  if (page === 'courses')   initCourses();
  if (page === 'lesson')    initLesson();
  if (page === 'profile')   initProfile();
}

function goHome() {
  DB.session ? showPage('dashboard') : showPage('home');
}

// ─── INIT (on page load) ───
(function init() {
  if (DB.session && window.location.hash === '#dashboard') {
    showPage('dashboard');
  }
})();

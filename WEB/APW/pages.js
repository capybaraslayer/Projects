// ─── DASHBOARD ───
function initDashboard() {
  const session = DB.session;
  if (!session) { showPage('login'); return; }

  const initials = session.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  document.getElementById('dash-greeting').textContent = 'Bună, ' + session.name.split(' ')[0] + '!';
  document.getElementById('dash-date').textContent = new Date().toLocaleDateString('ro-RO', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById('sidebar-user-info').innerHTML = `
    <div class="user-avatar">${initials}</div>
    <div>
      <div class="user-name">${session.name}</div>
      <div class="user-email">${session.email}</div>
    </div>
  `;
}

// ─── COURSES ───
function initCourses() {
  renderCourses(COURSES);
  const session = DB.session;
  const nav = document.getElementById('courses-nav-links');

  if (session) {
    nav.innerHTML = `
      <button class="nav-link" onclick="showPage('dashboard')">Dashboard</button>
      <button class="nav-link" onclick="showPage('profile')">Profil</button>
      <button class="nav-link" onclick="doLogout()" style="color:var(--danger);">Deconectare</button>`;
  } else {
    nav.innerHTML = `
      <button class="nav-link" onclick="showPage('login')">Autentificare</button>
      <button class="btn-nav-accent" onclick="showPage('register')">Înregistrare</button>`;
  }
}

function renderCourses(list) {
  const grid = document.getElementById('courses-grid');
  const levelMap = {
    beginner: { label: 'Începător',   cls: 'badge-beginner' },
    medium:   { label: 'Intermediar', cls: 'badge-medium'   },
    advanced: { label: 'Avansat',     cls: 'badge-advanced' }
  };

  grid.innerHTML = list.map(c => {
    const lv = levelMap[c.level];
    return `
      <div class="card course-card card-hover" onclick="showPage('lesson')">
        <div class="course-thumb ${c.thumb}">${c.icon}</div>
        <span class="badge ${lv.cls}">${lv.label}</span>
        <div class="course-card-title" style="margin-top:10px;">${c.title}</div>
        <div class="course-card-desc">${c.desc}</div>
        <div class="course-card-footer">
          <div class="course-meta">
            <span>📖 ${c.lessons} lecții</span>
          </div>
          ${c.enrolled
            ? '<span class="badge badge-completed">✓ Înscris</span>'
            : `<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();enrollCourse(${c.id})">Înscrie-te</button>`
          }
        </div>
      </div>`;
  }).join('');
}

function filterCourses(level, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = level === 'all' ? COURSES : COURSES.filter(c => c.level === level);
  renderCourses(filtered);
}

function enrollCourse(id) {
  if (!DB.session) { showPage('login'); return; }
  const c = COURSES.find(c => c.id === id);
  if (c) {
    c.enrolled = true;
    renderCourses(COURSES);
    showToast('Te-ai înscris la "' + c.title + '"!', 'success');
  }
}

// ─── LESSON ───
function initLesson() {
  const session = DB.session;
  document.getElementById('lesson-nav-user').textContent = session
    ? session.name.split(' ')[0] + ' →'
    : 'Cont';

  document.getElementById('lesson-list').innerHTML = LESSONS.map(l => `
    <div class="lesson-item ${l.active ? 'active' : ''} ${l.done ? 'done' : ''}"
         onclick="selectLesson(${l.id})">
      <span class="lesson-check">${l.done ? '✓' : l.active ? '▶' : '○'}</span>
      <span>${l.id}. ${l.title}</span>
    </div>`).join('');
}

function selectLesson(id) {
  LESSONS.forEach(l => { l.active = l.id === id; });
  initLesson();
}

function markDone() {
  const active = LESSONS.find(l => l.active);
  if (active) {
    active.done = true;
    const next = LESSONS.find(l => !l.done);
    if (next) { active.active = false; next.active = true; }
    initLesson();
    showToast('Lecție finalizată! Continuă cu "' + (next ? next.title : 'următoarea') + '"!', 'success');
  }
}

function nextLesson() {
  const active = LESSONS.find(l => l.active);
  const idx = LESSONS.indexOf(active);
  if (idx < LESSONS.length - 1) {
    active.active = false;
    LESSONS[idx + 1].active = true;
    initLesson();
  } else {
    showToast('Ai finalizat toate lecțiile din acest curs! 🎉', 'success');
  }
}

// ─── PROFILE ───
function initProfile() {
  const session = DB.session;
  if (!session) { showPage('login'); return; }

  const initials = session.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('profile-avatar').textContent = initials;
  document.getElementById('profile-name').textContent   = session.name;
  document.getElementById('profile-name-input').value   = session.name;
  document.getElementById('profile-email-input').value  = session.email;
}

function saveProfile() {
  const name = document.getElementById('profile-name-input').value.trim();
  if (!name) { showToast('Introduceți un nume valid.', 'error'); return; }

  const session = DB.session;
  session.name = name;
  DB.setSession(session);

  document.getElementById('profile-name').textContent = name;
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('profile-avatar').textContent = initials;
  showToast('Profil actualizat cu succes!', 'success');
}

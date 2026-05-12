// ─── LOGIN ───
function doLogin() {
  clearErrors();
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  let valid = true;

  if (!email || !isValidEmail(email)) {
    showErr('err-login-email', 'Email invalid');
    valid = false;
  }
  if (!pass || pass.length < 6) {
    showErr('err-login-pass', 'Parola trebuie să aibă cel puțin 6 caractere');
    valid = false;
  }
  if (!valid) return;

  const users = DB.users;
  const user  = users.find(u => u.email === email);

  if (!user || simpleHash(pass, user.salt) !== user.hash) {
    showAlert('login-alert', 'error', 'Email sau parolă incorectă.');
    return;
  }

  DB.setSession({ id: user.id, name: user.name, email: user.email });
  showToast('Bun venit, ' + user.name.split(' ')[0] + '!', 'success');
  showPage('dashboard');
}

// ─── REGISTER ───
function doRegister() {
  clearErrors();
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-pass').value;
  const pass2 = document.getElementById('reg-pass2').value;
  let valid = true;

  if (!name || name.length < 2) {
    showErr('err-reg-name', 'Introduceți numele complet');
    valid = false;
  }
  if (!email || !isValidEmail(email)) {
    showErr('err-reg-email', 'Email invalid');
    valid = false;
  }
  if (!pass || pass.length < 6) {
    showErr('err-reg-pass', 'Parola trebuie să aibă cel puțin 6 caractere');
    valid = false;
  }
  if (pass !== pass2) {
    showErr('err-reg-pass2', 'Parolele nu se potrivesc');
    valid = false;
  }
  if (!valid) return;

  const users = DB.users;
  if (users.find(u => u.email === email)) {
    showAlert('register-alert', 'error', 'Există deja un cont cu acest email.');
    return;
  }

  const salt    = Math.random().toString(36).slice(2);
  const newUser = {
    id: Date.now(), name, email,
    salt, hash: simpleHash(pass, salt),
    createdAt: new Date().toISOString()
  };
  users.push(newUser);
  DB.setUsers(users);
  DB.setSession({ id: newUser.id, name, email });

  showToast('Cont creat cu succes! Bun venit, ' + name.split(' ')[0] + '!', 'success');
  showPage('dashboard');
}

// ─── LOGOUT ───
function doLogout() {
  DB.clearSession();
  showToast('Ai fost deconectat.', 'info');
  showPage('home');
}

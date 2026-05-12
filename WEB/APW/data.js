// ─── DATABASE (localStorage abstraction) ───
const DB = {
  get users() {
    try { return JSON.parse(localStorage.getItem('pw_users') || '[]'); } catch { return []; }
  },
  setUsers(u) { localStorage.setItem('pw_users', JSON.stringify(u)); },

  get session() {
    try { return JSON.parse(localStorage.getItem('pw_session') || 'null'); } catch { return null; }
  },
  setSession(s) { localStorage.setItem('pw_session', JSON.stringify(s)); },
  clearSession() { localStorage.removeItem('pw_session'); },

  get progress() {
    try { return JSON.parse(localStorage.getItem('pw_progress') || '{}'); } catch { return {}; }
  },
  setProgress(p) { localStorage.setItem('pw_progress', JSON.stringify(p)); }
};

// ─── COURSES DATA ───
const COURSES = [
  { id: 1, title: 'Python Basics', desc: 'Fundamentele limbajului Python — variabile, funcții, controlul fluxului, OOP.', level: 'beginner', icon: '🐍', thumb: 'thumb-py', lessons: 12, enrolled: true },
  { id: 2, title: 'Web Development cu Flask', desc: 'Construiește aplicații web complete cu Python Flask, Jinja2 și SQLAlchemy.', level: 'medium', icon: '🌐', thumb: 'thumb-web', lessons: 15, enrolled: true },
  { id: 3, title: 'Algoritmi & Structuri de Date', desc: 'Pregătire pentru interviuri tehnice — sorting, searching, graphs, dynamic programming.', level: 'advanced', icon: '🧩', thumb: 'thumb-algo', lessons: 20, enrolled: true },
  { id: 4, title: 'Data Science cu Pandas', desc: 'Analizează și vizualizează date cu Pandas, NumPy și Matplotlib.', level: 'medium', icon: '📊', thumb: 'thumb-data', lessons: 18 },
  { id: 5, title: 'REST API cu FastAPI', desc: 'Creează API-uri moderne, rapide și auto-documentate cu FastAPI și Pydantic.', level: 'medium', icon: '⚡', thumb: 'thumb-api', lessons: 10 },
  { id: 6, title: 'Securitate Web & Python', desc: 'OWASP Top 10, autentificare JWT, hashing parole, protecție SQL injection.', level: 'advanced', icon: '🔒', thumb: 'thumb-sec', lessons: 14 },
];

// ─── LESSONS DATA ───
const LESSONS = [
  { id: 1,  title: 'Introducere în Python',      done: true,  active: false },
  { id: 2,  title: 'Variabile și Tipuri de Date', done: true,  active: false },
  { id: 3,  title: 'Operatori și Expresii',        done: true,  active: false },
  { id: 4,  title: 'Instrucțiuni if/else',          done: true,  active: false },
  { id: 5,  title: 'Bucle for și while',            done: true,  active: false },
  { id: 6,  title: 'Funcții și Parametri',          done: true,  active: false },
  { id: 7,  title: 'Funcții Lambda și Map',         done: true,  active: false },
  { id: 8,  title: 'Liste și Dicționare',           done: false, active: true  },
  { id: 9,  title: 'Seturi și Tuple',               done: false, active: false },
  { id: 10, title: 'OOP — Clase și Obiecte',        done: false, active: false },
  { id: 11, title: 'Moștenire și Polimorfism',      done: false, active: false },
  { id: 12, title: 'Module și Pachete',             done: false, active: false },
];

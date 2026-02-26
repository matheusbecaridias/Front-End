document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const root = document.documentElement;

function applyTheme(theme) {
    if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
        toggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="10" r="5"/><line x1="10" y1="1" x2="10" y2="3" stroke="currentColor" stroke-width="2"/><line x1="10" y1="17" x2="10" y2="19" stroke="currentColor" stroke-width="2"/><line x1="1" y1="10" x2="3" y2="10" stroke="currentColor" stroke-width="2"/><line x1="17" y1="10" x2="19" y2="10" stroke="currentColor" stroke-width="2"/></svg>';
    } else {
        root.removeAttribute('data-theme');
        toggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a1 1 0 00-1.414 1.414A6 6 0 1015.879 14.707a1 1 0 001.414-1.414z"/></svg>';
    }
}

  // inicial
  applyTheme(stored === 'light' ? 'light' : 'dark');

  toggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

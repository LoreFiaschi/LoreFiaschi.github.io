/* Dark/light toggle. The initial theme is set in <head> before paint;
   this just wires the button and remembers the choice. */
(function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  var root = document.documentElement;

  function syncLabel() {
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.textContent = dark ? '☀ Light' : '☾ Dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }

  syncLabel();

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncLabel();
  });
})();

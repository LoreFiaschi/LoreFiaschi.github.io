/* Sidebar scrollspy: highlight the nav link whose section is currently in view. */
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.s-nav a[href^="#"]'));
  if (!links.length) return;

  var map = [];
  links.forEach(function (a) {
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) map.push({ el: el, link: a });
  });
  if (!map.length) return;

  var lastActive = null;

  function update() {
    var line = window.innerHeight * 0.28;      // activation line, ~28% down the viewport
    var current = map[0].link;

    for (var i = 0; i < map.length; i++) {
      if (map[i].el.getBoundingClientRect().top <= line) current = map[i].link;
    }
    // At the very bottom of the page, force the last section active.
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 2)) {
      current = map[map.length - 1].link;
    }

    if (current === lastActive) return;        // nothing to change
    lastActive = current;
    links.forEach(function (a) {
      var on = (a === current);
      a.classList.toggle('active', on);
      if (on) { a.setAttribute('aria-current', 'true'); }
      else { a.removeAttribute('aria-current'); }
    });
  }

  // Direct (passive) listener — a 5-item check is cheap, and this keeps working
  // even in throttled/backgrounded tabs where requestAnimationFrame is paused.
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();

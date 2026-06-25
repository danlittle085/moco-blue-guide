/* =========================================================
   Moco Blue Koh Samui — Welcome Guide
   Interaction: nav menu, scroll state, accordion, tabs
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu after clicking a link (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Navbar background on scroll ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Accordion (House Rules) ---------- */
  document.querySelectorAll('.accordion__head').forEach(function (head) {
    head.addEventListener('click', function () {
      var body = head.nextElementSibling;
      var isOpen = head.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        head.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        head.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Tabs (Island Guide) ---------- */
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-tab');

      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      panels.forEach(function (p) { p.classList.remove('is-active'); });

      tab.classList.add('is-active');
      var panel = document.querySelector('.tab-panel[data-panel="' + target + '"]');
      if (panel) { panel.classList.add('is-active'); }
    });
  });
})();

/**
 * Bascule clair / sombre.
 * - Le thème initial est appliqué très tôt par un script inline dans le <head>
 *   (préférence enregistrée ou réglage système), ce qui évite tout clignotement.
 * - Ce script synchronise le bouton avec l'état courant, gère le clic et
 *   mémorise le choix de l'utilisateur dans localStorage.
 * - Si l'utilisateur n'a jamais choisi, on suit la préférence système en direct.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    return root.getAttribute('data-theme') === 'dark';
  }

  function setMeta(dark) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', dark ? '#0f141b' : '#2563eb');
    }
  }

  function apply(dark) {
    if (dark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    setMeta(dark);

    var button = document.getElementById('theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute(
        'aria-label',
        dark ? 'Activer le thème clair' : 'Activer le thème sombre'
      );
    }
  }

  // Synchronise dès maintenant (le <head> a pu déjà poser data-theme).
  apply(isDark());

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-toggle');
    if (!button) {
      return;
    }

    apply(isDark());

    button.addEventListener('click', function () {
      var dark = !isDark();
      apply(dark);
      try {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
      } catch (e) {}
    });
  });

  // Tant qu'aucun choix manuel n'est enregistré, on suit le système.
  media.addEventListener('change', function (event) {
    var saved;
    try {
      saved = localStorage.getItem('theme');
    } catch (e) {
      saved = null;
    }
    if (!saved) {
      apply(event.matches);
    }
  });
})();

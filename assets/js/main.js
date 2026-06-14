/**
 * Comportements généraux du portfolio.
 * - Menu de navigation mobile (ouverture / fermeture).
 * - Mise à jour automatique de l'année dans le pied de page.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // --- Menu mobile -------------------------------------------------------
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');

    if (toggle && menu) {
      var closeMenu = function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Ouvrir le menu');
      };

      toggle.addEventListener('click', function () {
        var isOpen = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      });

      // Ferme le menu après un clic sur un lien (navigation par ancre).
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });
    }

    // --- Année du pied de page --------------------------------------------
    var year = document.getElementById('year');
    if (year) {
      year.textContent = String(new Date().getFullYear());
    }
  });
})();

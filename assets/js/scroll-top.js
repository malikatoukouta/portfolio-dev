/**
 * Bouton « retour en haut ».
 * - Amélioration progressive : le bouton est masqué (attribut `hidden`) tant que
 *   ce script n'a pas pris le relais, pour ne pas afficher un bouton inerte si
 *   JavaScript est désactivé.
 * - Apparaît après un certain défilement (classe .is-visible).
 * - Remonte la page au clic, en douceur sauf si l'utilisateur préfère un
 *   mouvement réduit (prefers-reduced-motion).
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('scroll-top');
    if (!button) {
      return;
    }

    var SHOW_AFTER = 300; // pixels défilés avant affichage
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Le script est actif : on confie l'affichage au CSS (.is-visible).
    button.hidden = false;

    function toggleButton() {
      if (window.pageYOffset > SHOW_AFTER) {
        button.classList.add('is-visible');
      } else {
        button.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', toggleButton, { passive: true });
    toggleButton();

    button.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion.matches ? 'auto' : 'smooth'
      });
    });
  });
})();

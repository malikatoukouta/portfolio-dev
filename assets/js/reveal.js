/**
 * Apparition au défilement.
 *
 * Tout élément portant la classe « reveal » devient visible (classe
 * « is-revealed ») dès qu'il entre dans la zone visible. Utilise
 * IntersectionObserver ; en cas d'absence de support (ou si l'utilisateur
 * préfère un mouvement réduit), les éléments sont affichés immédiatement.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) {
      return;
    }

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var unsupported = typeof window.IntersectionObserver === 'undefined';

    // Repli : tout afficher sans animation.
    if (reduceMotion || unsupported) {
      elements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target); // une seule fois
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  });
})();

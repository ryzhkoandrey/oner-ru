'use strict';

// ---------- FILTER ---------- //

const filterAccordions = document.querySelectorAll('[data-filter-accordion]');

filterAccordions.forEach((accordion) => {
   const accordionToggler = accordion.querySelector(
      '[data-filter-accordion-toggler]'
   );
   const accordionBody = accordion.querySelector('[data-filter-accordion-body]');

   if (accordionToggler && accordionBody) {
      accordionToggler.addEventListener('click', () => {
         const isOpen = accordion.classList.toggle('filter--active');

         if (isOpen) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
         } else {
            accordionBody.removeAttribute('style');
         }
      });
   }
});

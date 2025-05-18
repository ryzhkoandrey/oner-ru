'use strict';

// ---------- FILTER ---------- //

// accordion

const filterAccordions = document.querySelectorAll('[data-filter-accordion]');

const setAccordionHeight = (accordionBody) => {
   accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
};

filterAccordions.forEach((accordion) => {
   const accordionToggler = accordion.querySelector(
      '[data-filter-accordion-toggler]'
   );
   const accordionBody = accordion.querySelector('[data-filter-accordion-body]');

   if (accordionToggler && accordionBody) {
      if (accordion.classList.contains('filter--active')) {
         setAccordionHeight(accordionBody);
      }

      accordionToggler.addEventListener('click', () => {
         const isOpen = accordion.classList.toggle('filter--active');

         if (isOpen) {
            setAccordionHeight(accordionBody);
         } else {
            accordionBody.removeAttribute('style');
         }
      });
   }
});

window.addEventListener('resize', () => {
   filterAccordions.forEach((accordion) => {
      if (accordion.classList.contains('filter--active')) {
         const accordionBody = accordion.querySelector(
            '[data-filter-accordion-body]'
         );
         if (accordionBody) {
            setAccordionHeight(accordionBody);
         }
      }
   });
});

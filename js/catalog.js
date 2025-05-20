'use strict';

// ---------- FILTERS ---------- //

// filters accordion

const filtersAccordions = document.querySelectorAll('[data-filters-accordion]');
const isFiltersTablet = () => window.matchMedia('(max-width: 1024px)').matches;

filtersAccordions.forEach((accordion) => {
   const accordionToggler = accordion.querySelector(
      '[data-filters-accordion-toggler]'
   );
   const accordionBody = accordion.querySelector('[data-filters-accordion-body]');

   if (accordionToggler && accordionBody) {
      if (accordion.classList.contains('filters--active')) {
         accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
      }

      accordionToggler.addEventListener('click', () => {
         if (isFiltersTablet()) {
            const isOpen = accordion.classList.toggle('filters--active');

            if (isOpen) {
               accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            } else {
               accordionBody.removeAttribute('style');
            }
         }
      });
   } else {
      console.error('error: filters accordion');
   }
});

// filter accordion

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
   } else {
      console.error('error: filter accordion');
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
         } else {
            console.error('error: filter accordion');
         }
      }
   });
});

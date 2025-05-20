'use strict';

// ---------- FILTERS ---------- //

const isFiltersTablet = () => window.matchMedia('(max-width: 1024px)').matches;

const setAccordionHeight = (accordionBody) => {
   accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
};

// filters accordion

const filtersAccordion = document.querySelector('[data-filters-accordion]');
const filtersAccordionToggler = filtersAccordion.querySelector(
   '[data-filters-accordion-toggler]'
);
const filtersAccordionBody = filtersAccordion.querySelector(
   '[data-filters-accordion-body]'
);

if (filtersAccordion && filtersAccordionToggler && filtersAccordionBody) {
   if (filtersAccordion.classList.contains('filters--active')) {
      setAccordionHeight(filtersAccordionBody);
   }

   filtersAccordionToggler.addEventListener('click', () => {
      if (isFiltersTablet()) {
         const isOpen = filtersAccordion.classList.toggle('filters--active');

         if (isOpen) {
            setAccordionHeight(filtersAccordionBody);
         } else {
            filtersAccordionBody.removeAttribute('style');
         }
      }
   });
} else {
   console.error('error: filters accordion');
}

// filter accordion

const filterAccordions = document.querySelectorAll('[data-filter-accordion]');

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

'use strict';

// ---------- FILTERS ---------- //

const isFiltersTablet = () => window.matchMedia('(max-width: 1024px)').matches;

const setAccordionHeight = (accordionBody) => {
   if (!accordionBody) return;
   accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
};

// filters accordion

const filtersAccordion = document.querySelector('[data-filters]');
const filtersAccordionToggler = filtersAccordion?.querySelector(
   '[data-filters-toggler]'
);
const filtersAccordionBody = filtersAccordion?.querySelector('[data-filters-body]');

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

const filterAccordions = document.querySelectorAll('[data-filter]');

filterAccordions.forEach((accordion) => {
   const accordionToggler = accordion.querySelector('[data-filter-toggler]');
   const accordionBody = accordion.querySelector('[data-filter-body]');

   if (accordionToggler && accordionBody) {
      if (accordion.classList.contains('filter--active')) {
         setAccordionHeight(accordionBody);
      }

      accordionToggler.addEventListener('click', () => {
         const isOpen = accordion.classList.toggle('filter--active');

         if (isOpen) {
            setAccordionHeight(accordionBody);

            accordionBody.addEventListener(
               'transitionend',
               (e) => {
                  if (e.propertyName === 'max-height') {
                     if (
                        filtersAccordionBody &&
                        filtersAccordion.classList.contains('filters--active')
                     ) {
                        setAccordionHeight(filtersAccordionBody);
                     }
                  }
               },
               { once: true }
            );
         } else {
            accordionBody.removeAttribute('style');
            if (
               filtersAccordionBody &&
               filtersAccordion.classList.contains('filters--active')
            ) {
               setAccordionHeight(filtersAccordionBody);
            }
         }
      });
   } else {
      console.error('error: filter accordion');
   }
});

// resize

window.addEventListener('resize', () => {
   // filters accordion
   if (filtersAccordion && filtersAccordionBody) {
      if (filtersAccordion.classList.contains('filters--active')) {
         setAccordionHeight(filtersAccordionBody);
      }
   } else {
      console.error('error: filters accordion resize');
   }

   // filter accordion
   filterAccordions.forEach((accordion) => {
      if (accordion.classList.contains('filter--active')) {
         const accordionBody = accordion.querySelector('[data-filter-body]');
         if (accordionBody) {
            setAccordionHeight(accordionBody);
         } else {
            console.error('error: filter accordion resize');
         }
      }
   });
});

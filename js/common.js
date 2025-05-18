'use strict';

// ---------- MOBILE-MENU ---------- //

const menu = document.querySelector('[data-mobile-menu]');
const menuOpen = document.querySelector('[data-mobile-menu-open]');
const menuClose = document.querySelector('[data-mobile-menu-close]');

if (menu && menuOpen && menuClose) {
   menuOpen.addEventListener('click', () => {
      menu.classList.add('mobile-menu--active');
      document.body.classList.add('no-scroll-adaptive');
   });

   menuClose.addEventListener('click', () => {
      menu.classList.remove('mobile-menu--active');
      document.body.classList.remove('no-scroll-adaptive');
   });
} else {
   console.error('error: mobile-menu');
}

// ---------- ALL CATEGORIES ---------- //

const headerCategoriesBtn = document.querySelector('[data-header-categories-btn]');
const allCategories = document.querySelector('[data-all-categories]');
const allCategoriesContainer = allCategories.querySelector(
   '[data-all-categories-container]'
);
const allCategoriesInner = allCategories.querySelector(
   '[data-all-categories-inner]'
);

if (
   headerCategoriesBtn &&
   allCategories &&
   allCategoriesContainer &&
   allCategoriesInner
) {
   // open
   headerCategoriesBtn.addEventListener('click', () => {
      const rect = headerCategoriesBtn.getBoundingClientRect();
      allCategoriesContainer.style.top = `${rect.bottom + window.scrollY}px`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      allCategories.classList.toggle('all-categories--active');
      document.body.classList.toggle('no-scroll');
   });

   // close
   allCategories.addEventListener('click', () => {
      allCategories.classList.remove('all-categories--active');
      allCategoriesContainer.removeAttribute('style');
      document.body.classList.remove('no-scroll');
   });

   allCategoriesInner.addEventListener('click', (e) => {
      e.stopPropagation();
   });
} else {
   console.error('error: all categories');
}

// ---------- FOOTER ---------- //

// menu accordion (mobile only)

const footerAccordions = document.querySelectorAll('[data-footer-accordion]');
const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

footerAccordions.forEach((accordion) => {
   const accordionToggler = accordion.querySelector(
      '[data-footer-accordion-toggler]'
   );
   const accordionBody = accordion.querySelector('[data-footer-accordion-body]');

   if (accordionToggler && accordionBody) {
      accordionToggler.addEventListener('click', () => {
         if (isMobile()) {
            const isOpen = accordion.classList.toggle('footer__menu--active');

            if (isOpen) {
               accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            } else {
               accordionBody.removeAttribute('style');
            }
         }
      });
   } else {
      console.error('error: footer menu accordion');
   }
});

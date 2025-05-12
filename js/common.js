'use strict';

// ---------- MOBILE-MENU ---------- //

const menu = document.querySelector('[data-mobile-menu]');
const menuOpen = document.querySelector('[data-mobile-menu-open]');
const menuClose = document.querySelector('[data-mobile-menu-close]');

if (menu && menuOpen && menuClose) {
   menuOpen.addEventListener('click', () => {
      menu.classList.add('mobile-menu--active');
      document.querySelector('body').classList.add('no-scroll-adaptive');
   });

   menuClose.addEventListener('click', () => {
      menu.classList.remove('mobile-menu--active');
      document.querySelector('body').classList.remove('no-scroll-adaptive');
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
      document.querySelector('body').classList.toggle('no-scroll');
   });

   // close
   allCategories.addEventListener('click', () => {
      allCategories.classList.toggle('all-categories--active');
      allCategoriesContainer.removeAttribute('style');
      document.querySelector('body').classList.toggle('no-scroll');
   });

   allCategoriesInner.addEventListener('click', (e) => {
      e.stopPropagation();
   });
} else {
   console.error('error: all categories');
}

// ---------- FOOTER ---------- //

// menu accordion

const accordions = document.querySelectorAll('[data-accordion]');
const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

accordions.forEach((accordion) => {
   const accordionToggler = accordion.querySelector('[data-accordion-toggler]');
   const accordionBody = accordion.querySelector('[data-accordion-body]');

   accordionToggler.addEventListener('click', () => {
      if (isMobile()) {
         const isOpen = accordion.classList.toggle('accordion--active');

         if (isOpen) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
         } else {
            accordionBody.removeAttribute('style');
         }
      }
   });
});

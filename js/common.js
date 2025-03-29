'use strict';

// ---------- ALL CATEGORIES ----------

const headerCategoriesBtn = document.querySelector('[data-header-categories-btn]');
const allCategories = document.querySelector('[data-all-categories]');
const allCategoriesContainer = allCategories.querySelector('[data-all-categories-container]');
const allCategoriesInner = allCategories.querySelector('[data-all-categories-inner]');
const body = document.querySelector('body');

if (headerCategoriesBtn && allCategories && allCategoriesContainer && allCategoriesInner) {

   // open
   headerCategoriesBtn.addEventListener('click', () => {
      const rect = headerCategoriesBtn.getBoundingClientRect();
      allCategoriesContainer.style.top = `${rect.bottom + window.scrollY}px`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      allCategories.classList.toggle('all-categories--active');
      body.classList.toggle('no-scroll');
   });

   // close
   allCategories.addEventListener('click', () => {
      allCategories.classList.toggle('all-categories--active');
      allCategoriesContainer.removeAttribute('style');
      body.classList.toggle('no-scroll');
   });

   allCategoriesInner.addEventListener('click', (e) => {
      e.stopPropagation();
   });
} else {
   console.error('error: all categories');
}
'use strict';

// ---------- ALL CATEGORIES ----------

const headerCategoriesBtn = document.querySelector('[data-header-categories-btn]');
const allCategories = document.querySelector('[data-all-categories]');
const allCategoriesContainer = allCategories.querySelector('[data-all-categories-container]');

headerCategoriesBtn.addEventListener('click', () => {
   const rect = headerCategoriesBtn.getBoundingClientRect();
   allCategoriesContainer.style.top = `${rect.bottom + window.scrollY}px`;
   allCategories.classList.toggle('all-categories--active');
});
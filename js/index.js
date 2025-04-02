'use strict';

// ---------- SLIDER ----------

// swiper

const slider = document.querySelector('[data-slider]');

if (typeof Swiper !== 'undefined' && slider) {
   const sliderSwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 500,

      navigation: {
         prevEl: '[data-slider-prev]',
         nextEl: '[data-slider-next]',
      },

      pagination: {
         el: '[data-slider-pagination]',
         clickable: true,
      },
   });
} else {
   console.error('error: slider');
}

// ---------- TOP-PRODUCTS ----------

// swiper

const topProducts = document.querySelector('[data-top-products]');

if (typeof Swiper !== 'undefined' && topProducts) {
   const topProductsSwiper = new Swiper(topProducts, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
   });
} else {
   console.error('error: top-products');
}

// ---------- TOP-CATEGORIES ----------

// swiper

const topCategories = document.querySelector('[data-top-categories]');

if (typeof Swiper !== 'undefined' && topCategories) {
   const topCategoriesSwiper = new Swiper(topCategories, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
   });
} else {
   console.error('error: top-categories');
}

// ---------- RECOMMENDED-PRODUCTS ----------

// swiper

const recommendedProducts = document.querySelector('[data-recommended-products]');

if (typeof Swiper !== 'undefined' && recommendedProducts) {
   const recommendedProductsSwiper = new Swiper(recommendedProducts, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,

      navigation: {
         prevEl: '[data-recommended-products-prev]',
         nextEl: '[data-recommended-products-next]',
      },
   });
} else {
   console.error('error: recommended-products');
}

// ---------- SALE-PRODUCTS ----------

// swiper

const saleProducts = document.querySelector('[data-sale-products]');

if (typeof Swiper !== 'undefined' && saleProducts) {
   const saleProductsSwiper = new Swiper(saleProducts, {
      slidesPerView: 4,
      spaceBetween: 20,

      navigation: {
         prevEl: '[data-sale-products-prev]',
         nextEl: '[data-sale-products-next]',
      },
   });
} else {
   console.error('error: sale-products');
}
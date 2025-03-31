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

// ---------- RECOMMENDED ----------

// swiper

const recommended = document.querySelector('[data-recommended]');

if (typeof Swiper !== 'undefined' && recommended) {
   const recommendedSwiper = new Swiper(recommended, {
      slidesPerView: 4,
      spaceBetween: 20,
      speed: 500,

      navigation: {
         prevEl: '[data-recommended-prev]',
         nextEl: '[data-recommended-next]',
      },
   });
} else {
   console.error('error: recommended');
}
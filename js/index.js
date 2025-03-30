'use strict';

// ---------- SLIDER ----------

// swiper

const slider = document.querySelector('[data-slider]');

if (typeof Swiper !== 'undefined' && slider) {
   const sliderSwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 30,

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
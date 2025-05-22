'use strict';

// ---------- BRANDS LETTER ---------- //

const brandsLetters = document.querySelectorAll('[data-brands-letter]');

brandsLetters.forEach((letter) => {
   letter.addEventListener('click', () => {
      if (!letter.classList.contains('brands__letter--active')) {
         brandsLetters.forEach((item) =>
            item.classList.remove('brands__letter--active')
         );
         letter.classList.add('brands__letter--active');
      }
   });
});

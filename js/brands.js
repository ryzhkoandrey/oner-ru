'use strict';

// ---------- BRANDS LETTER ---------- //

const brandsLetters = document.querySelectorAll('[data-brands-letter]');

if (brandsLetters.length > 0) {
   brandsLetters.forEach((letter) => {
      letter.addEventListener('click', () => {
         brandsLetters.forEach((item) =>
            item.classList.remove('brands__letter--active')
         );
         letter.classList.add('brands__letter--active');
      });
   });
} else {
   console.error('error: brandsLetters is empty');
}

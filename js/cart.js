'use strict';

// ---------- CHECKBOX ---------- //

const selectAll = document.querySelector('[data-select-all]');
const checkboxes = document.querySelectorAll('[data-checkbox]');

if (selectAll) {
   selectAll.addEventListener('change', () => {
      checkboxes.forEach((checkbox) => {
         checkbox.checked = selectAll.checked;
      });
   });

   checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
         selectAll.checked = Array.from(checkboxes).every((cb) => cb.checked);
      });
   });
} else {
   console.warn('error: selectAll');
}

// ---------- COUNTER ---------- //

const counters = document.querySelectorAll('[data-counter]');

counters.forEach((counter) => {
   const btnMinus = counter.querySelector('[data-counter-minus]');
   const btnPlus = counter.querySelector('[data-counter-plus]');
   const input = counter.querySelector('[data-counter-input]');

   const getNum = (val) => parseFloat(val) || 0;
   const getStep = () => parseFloat(input.step) || 1;
   const getMin = () => parseFloat(input.min) || 0;
   const getMax = () => parseFloat(input.max) || Infinity;

   const updateButtonsState = () => {
      const val = getNum(input.value);
      btnPlus.disabled = val >= getMax();
      btnMinus.disabled = val <= getMin();
   };

   const sanitizeValue = () => {
      let val = getNum(input.value);
      val = Math.max(getMin(), Math.min(val, getMax()));
      input.value = val;
   };

   btnPlus.addEventListener('click', () => {
      input.value = getNum(input.value) + getStep();
      sanitizeValue();
      updateButtonsState();
   });

   btnMinus.addEventListener('click', () => {
      input.value = getNum(input.value) - getStep();
      sanitizeValue();
      updateButtonsState();
   });

   input.addEventListener('input', () => {
      sanitizeValue();
      updateButtonsState();
   });

   sanitizeValue();
   updateButtonsState();
});

// ---------- PROMOCODE ---------- //

const inputs = document.querySelectorAll('[data-floating-label-input]');

inputs.forEach((input) => {
   const parent = input.closest('[data-floating-label]');

   function updateLabel() {
      if (input === document.activeElement || input.value) {
         parent.classList.add('cart-order__promocode--filled');
      } else {
         parent.classList.remove('cart-order__promocode--filled');
      }
   }

   input.addEventListener('focus', () => {
      parent.classList.add('cart-order__promocode--active');
      updateLabel();
   });

   input.addEventListener('blur', () => {
      parent.classList.remove('cart-order__promocode--active');
      updateLabel();
   });

   input.addEventListener('input', updateLabel);

   updateLabel();
});

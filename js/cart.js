'use strict';

// ---------- CART PRODUCT COUNTER ---------- //

document.querySelectorAll('[data-counter]').forEach((wrapper) => {
   const input = wrapper.querySelector('[data-counter-input]');
   const btnPlus = wrapper.querySelector('[data-counter-up]');
   const btnMinus = wrapper.querySelector('[data-counter-down]');

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

   // Стартовое состояние
   sanitizeValue();
   updateButtonsState();
});

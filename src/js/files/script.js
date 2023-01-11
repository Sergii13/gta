// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import { gotoBlock } from "./scroll/gotoblock.js";

const priceInput = document.querySelector('#price');

if (priceInput) {
   document.addEventListener('click', (e) => {

      if (e.target.closest('[data-sum]')) {
         let target = e.target.closest('[data-sum]');
         e.preventDefault();
         const sum = parseInt(target.dataset.sum);
         priceInput.parentElement.classList.add('_fill');
         priceInput.classList.add('_fill');
         priceInput.value = sum;
         gotoBlock('.donate', false, 200, 0);

      }
   })
}
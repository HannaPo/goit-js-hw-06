const countEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const handledecrementBtn = e => {
  counterValue--;
  countEl.textContent = counterValue;
};

const handleincrementBtn = e => {
  counterValue++;
  countEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', handledecrementBtn);
incrementBtn.addEventListener('click', handleincrementBtn);

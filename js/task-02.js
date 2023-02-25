const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = ingredients.map(el => {
  const listItem = document.createElement('li');
  listItem.classList.add('.item');
  listItem.textContent = el;
  return listItem;
});

console.log(ingredientsEl);

const listEl = document.querySelector('#ingredients');

listEl.append(...ingredientsEl);

const allCategoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategoriesList.length}`);

allCategoriesList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

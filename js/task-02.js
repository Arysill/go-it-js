const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("ul");
const arrIngredients = ingredients.map((el) => {
  const newItem = document.createElement("li");
  newItem.textContent = el;
  newItem.classList.add("item");
  return newItem;
})
ingredientsList.append(...arrIngredients);
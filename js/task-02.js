const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingridient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingridient;

  return li;
});

list.append(...ingredientsList);

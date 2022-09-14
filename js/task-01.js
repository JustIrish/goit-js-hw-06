const categoriesEl = document.querySelector("#categories");
const categories = [...categoriesEl.children];
console.log(`Number of categories: ${categories.length}\n `);
// console.dir(categories);

for (const category of categories) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.childElementCount}\n `);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const boxes = document.querySelector("#boxes");

inputEl.addEventListener("blur", hendlerInput);
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function hendlerInput() {
  return inputEl.value;
}

function createBoxes(amount) {
  amount = hendlerInput();
  let size = 30;
  let boxesArrey = [];

  for (let i = 0; i < amount; i += 1) {
    let str = `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    boxesArrey.push(str);
    size += 10;
  }

  boxes.insertAdjacentHTML("afterbegin", boxesArrey.join(""));
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

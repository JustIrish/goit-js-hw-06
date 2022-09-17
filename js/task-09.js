function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const textColor = document.querySelector(".color");

button.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor() {
  let color = getRandomHexColor();
  console.log(color);
  body.style.background = color;
  textColor.textContent = color;
}

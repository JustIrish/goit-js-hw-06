let counterValue = 0;
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector("#value");

buttonDecr.addEventListener("click", onDecrementClick);
buttonIncr.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterEl.textContent = counterValue -= 1;
}
function onIncrementClick() {
  counterEl.textContent = counterValue += 1;
}

const inputEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputEl.addEventListener("input", handlerInput);

function handlerInput() {
  if (inputEl.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputEl.value.trim();
  }
}

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handlerBlurInput);

function handlerBlurInput() {
  inputEl.classList.add("invalid");
  if (inputEl.value.trim().length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}

const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("input", onInputChange);

function onInputChange() {
  //   console.log(inputRange.value);
  text.style.fontSize = inputRange.value + "px";
}

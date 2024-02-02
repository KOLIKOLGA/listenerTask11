const btn = document.getElementById("btn");
const square = document.getElementById("square");
const inputText = document.getElementById("text");
const span = document.getElementById("text-span");
const range = document.getElementById("range");
const spanRange = document.getElementById("range-span");
const link = document.querySelector("a");
const btnE = document.querySelector("#e_btn");
const circle = document.querySelector("#circle");

btnE.style = "display: none; ";

let color;
const getInputColor = function () {
  color = inputText.value;
  square.style.backgroundColor = ` ${color}`;
};
btn.addEventListener("click", getInputColor);

range.addEventListener("input", function (event) {
  spanRange.textContent = event.target.value;

  circle.style.width = event.target.value + "%";
  circle.style.height = event.target.value + "%";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.body;
const colorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", onClick);

function onClick() {
  const color = getRandomHexColor();
  bodyEl.style.background = color;
  colorEl.textContent = color;
}
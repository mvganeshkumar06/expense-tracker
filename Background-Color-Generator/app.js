const btn = document.querySelector("#btn");
const head = document.querySelector("#head");

let value = "#000000";
head.textContent = `Background Color : ${value}`;

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  value = "#";

  for (let i = 0; i < 6; i++) {
    value += `${arr[generateRandomIndex()]}`;
  }

  document.body.style.backgroundColor = value;
  head.textContent = `Background Color : ${value}`;
});

function generateRandomIndex() {
  return Math.floor(Math.random() * 16);
}

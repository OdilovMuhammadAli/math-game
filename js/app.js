import { mathSigns } from "./constants.js";
import {
  calc,
  getRandomNumber,
  getRandomNumberArray,
  readyRandomNumbers,
} from "./functions.js";

let score = 0;
const scoreDisplay = document.querySelector(".score");

function increaseScore() {
  score++;
  scoreDisplay.textContent = score;
}

function init() {
  let a = getRandomNumber(9);
  let b = getRandomNumber(9);
  const singsIndex = getRandomNumber(mathSigns.length - 1);
  const sing = mathSigns[singsIndex];

  if (sing === "/") {
    while (a < b || a % b !== 0) {
      a = getRandomNumber(9);
      b = getRandomNumber(9);
    }
  }

  const result = calc(`${a}${sing}${b}`);
  const array = getRandomNumberArray(16, result);
  const readyArray = readyRandomNumbers(array, result);

  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const questionDisplay = document.querySelector(".question");
  questionDisplay.textContent = `${a} ${sing} ${b}`;

  readyArray.forEach((num) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = num;
    grid.appendChild(card);

    card.addEventListener("click", () => {
      if (num === result) {
        console.log("Togri javob:", num);
        card.innerText = "👌";
        card.style.backgroundColor = "green";

        increaseScore();
        setTimeout(() => {
          init();
        }, 1000);
      } else {
        console.log("Notog'ri javob:", num);
        card.innerText = "🤐";
        card.style.backgroundColor = "red";

        setTimeout(() => {
          init();
        }, 1000);
      }
    });
  });
}

init();
setInterval(init, 7000);

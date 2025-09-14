import { mathSigns } from "./constants.js";
import {
  calc,
  getRandomNumber,
  getRandomNumberArray,
  readyRandomNumbers,
} from "./functions.js";

function init() {
  let a = getRandomNumber(9);
  let b = getRandomNumber(9);
  const signIndex = getRandomNumber(mathSigns.length - 1);
  const sign = mathSigns[signIndex];

  if (sign === "/") {
    while (a < b || a % b !== 0) {
      a = getRandomNumber(9);
      b = getRandomNumber(9);
    }
  }
  const result = calc(`${a}${sign}${b}`);
  const array = getRandomNumberArray(16, result);
  const readyArray = readyRandomNumbers(array, result);

  console.log(readyArray);
  console.log(`${a}${sign}${b} = ${result}`);
}
init();
setInterval(init, 7000);

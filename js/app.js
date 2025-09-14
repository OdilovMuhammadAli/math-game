import { mathSigns } from "./constants.js";
import {
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

  const expression = `${a}${sign}${b}`;
  let result = 0;
  eval(`result = ${expression}`);
  console.log(result);

  console.log(readyRandomNumbers(getRandomNumberArray(16, result), result));
}
init();

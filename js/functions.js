export function getRandomNumber(num) {
  const result = Math.trunc(Math.random() * (num + 1));
  return result;
}

export function getRandomNumberArray(num, res) {
  const result = [];

  while (true) {
    let randomNum = getRandomNumber(99);
    while (randomNum === res) {
      randomNum = getRandomNumber(99);
    }
    result.push(randomNum);
    if (result.length === num) break;
  }
  return result;
}

export function readyRandomNumbers(array, res) {
  const randomIndex = getRandomNumber(array.length - 1);
  array[randomIndex] = res;
  return array;
}

export function calc(expression) {
  let result = null;
  eval(`result = ${expression}`);
  return result;
}

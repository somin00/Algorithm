const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const numbers = input[0].split(" ").map(Number);
let answer = 0;

function getNumbers(arr, selectedNum) {
  const results = [];
  if (selectedNum === 1) return arr.map((item) => [item]);
  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const numbers = getNumbers(rest, selectedNum - 1);
    const attached = numbers.map((item) => [fixed, ...item]);
    results.push(...attached);
  });
  return results;
}

function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    sum += Math.abs(numbers[i] - numbers[i + 1]);
  }
  return sum;
}

const results = getNumbers(numbers, n);

for (let i = 0; i < results.length; i++) {
  const newSum = getSum(results[i]);
  answer = Math.max(answer, newSum);
}

console.log(answer);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();
const numbers = input[0].split(" ").sort((a, b) => b - a);
const numberSet = new Set(numbers);
const arr = new Array(...numberSet);

const resultObj = {};

for (let i = 0; i < arr.length; i++) {
  const smaller = arr.length - (i + 1);
  resultObj[arr[i]] = smaller;
}
const answer = [];
const origin = input[0].split(" ");
for (let i = 0; i < origin.length; i++) {
  answer.push(resultObj[origin[i]]);
}

console.log(answer.join(" "));

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input.shift());
const a = input.shift().split(" ").map(Number);
const b = input.shift().split(" ").map(Number);

const sortedA = a.sort((a, b) => b - a);
const sortedB = b.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < n; i++) {
  sum += sortedA[i] * sortedB[i];
}

console.log(sum);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const distance = input[1].split(" ").map(Number);
const price = input[2].split(" ").map(Number);

let answer = 0;
let cntPrice = price[0];

for (let i = 0; i < n - 1; i++) {
  answer += cntPrice * distance[i];
  if (cntPrice > price[i + 1]) cntPrice = price[i + 1];
}

console.log(answer);

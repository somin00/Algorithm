const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const cards = input[1].split(" ");
const M = Number(input[2]);
const numbers = input[3].split(" ");

let answer = "";

const cardObj = {};
for (let i = 0; i < N; i++) {
  if (cardObj[cards[i]]) {
    cardObj[cards[i]]++;
  } else {
    cardObj[cards[i]] = 1;
  }
}

for (let i = 0; i < M; i++) {
  if (cardObj[numbers[i]]) answer += cardObj[numbers[i]] + " ";
  else answer += "0 ";
}

console.log(answer);

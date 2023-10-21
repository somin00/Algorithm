const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arrA = input[1].split(" ").map(Number);
const M = Number(input[2]);
const arrB = input[3].split(" ").map(Number);

const set = new Set([...arrA]);

let answer = "";
for (let i = 0; i < M; i++) {
  if (set.has(arrB[i])) answer += "1\n";
  else answer += "0\n";
}

console.log(answer);

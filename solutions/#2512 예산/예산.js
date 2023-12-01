const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input.shift());

let start = 0;
let end = arr[arr.length - 1];
let answer = 0;

while (start <= end) {
  let total = 0;
  const mid = Math.floor((start + end) / 2);

  for (let i = 0; i < N; i++) {
    if (arr[i] > mid) total += mid;
    else total += arr[i];
  }

  if (total <= M) {
    if (mid > answer) answer = mid;
    start = start + 1;
  } else {
    end = end - 1;
  }
}

console.log(answer);

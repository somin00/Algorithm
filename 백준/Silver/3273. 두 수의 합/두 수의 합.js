const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const x = +input[2];

let start = 0;
let end = arr.length - 1;
let answer = 0;
while (start !== end) {
  if (arr[start] + arr[end] === x) {
    answer++;
    start++;
  } else if (arr[start] + arr[end] > x) {
    end--;
  } else {
    start++;
  }
}

console.log(answer);

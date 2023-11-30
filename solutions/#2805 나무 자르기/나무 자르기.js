const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = arr[arr.length - 1];
let answer = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) sum += arr[i] - mid;
  }

  if (sum >= M) {
    if (mid > answer) answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(answer);

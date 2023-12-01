const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

let start = 0;
let end = arr[arr.length - 1];
let answer = 0;

while (start <= end) {
  let count = 0;
  const mid = Math.floor((start + end) / 2);
  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(arr[i] / mid);
  }

  if (count >= N) {
    if (mid > answer) answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);

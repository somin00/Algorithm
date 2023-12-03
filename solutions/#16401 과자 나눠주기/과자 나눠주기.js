const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let start = 1;
let end = Math.max(...arr);

let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(arr[i] / mid);
  }

  if (M <= count) {
    if (mid > answer) answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [x, y] = input.shift().split(" ").map(Number);

function getPercent(x, y) {
  return Math.floor((100 * y) / x);
}

const z = getPercent(x, y);

let start = 0;
let end = 1000000000;

let answer = -1;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  if (getPercent(x + mid, y + mid) !== z) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer);

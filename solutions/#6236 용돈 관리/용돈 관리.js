const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number);

let start = Math.max(...arr);
let end = 1e9;
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  if (isPossible(mid) <= M) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

function isPossible(mid) {
  let count = 1;
  let money = mid;
  for (let i = 0; i < N; i++) {
    if (money - arr[i] < 0) {
      money = mid;
      count++;
    }
    money -= arr[i];
  }

  return count;
}

console.log(answer);

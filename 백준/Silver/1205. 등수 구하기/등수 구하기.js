const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, newScore, p] = input[0].split(" ").map(Number);
const rankArr = Array.from({ length: p }, () => 0);
let rank = 1;
let cnt = 1;
let idx = 0;

if (input[1] === undefined) {
  console.log("1");
  return;
}

const arr = input[1].split(" ").map(Number);

for (let i = 0; i < n; i++) {
  if (newScore > arr[i]) {
    arr.splice(i, 0, newScore);
    idx = i;
    break;
  }
  if (i === n - 1) {
    arr.push(newScore);
    idx = i + 1;
  }
}

if (idx >= p) {
  console.log("-1");
  return;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    rankArr[i] = rank++;
    rank = cnt + 1;
  } else {
    rankArr[i] = rank;
  }
  cnt++;
}

console.log(rankArr[idx]);

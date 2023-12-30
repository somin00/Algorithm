const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input.map(Number);
const dp = Array.from({ length: n }, () => 0);

dp[0] = arr[0];
for (let i = 1; i < n; i++) {
  let first = 0,
    second = 0;
  if (i >= 1) first = arr[i] + arr[i - 1];
  if (i >= 2) second = arr[i] + dp[i - 2];
  if (i >= 3) first += dp[i - 3];

  dp[i] = Math.max(first, second);

  dp[i] = Math.max(dp[i - 1], dp[i]);
}

let answer = 0;
for (let i = 0; i < n; i++) {
  answer = Math.max(dp[i], answer);
}

console.log(answer);

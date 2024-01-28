const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
dp[1][0] = arr[0];

for (let i = 2; i < dp.length; i++) {
  for (let j = 0; j < i; j++) {
    for (let k = i - j - 1; k >= 0; k--) {
      dp[i][j] = Math.max(dp[i - j - 1][k] + arr[j], dp[i][j]);
    }
  }
}

console.log(Math.max(...dp[n]));

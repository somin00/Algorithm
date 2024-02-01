const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const dp = [];

for (let i = 1; i <= k; i++) {
  dp[i] = new Array(n + 1).fill(i === 1 ? 1 : 0);
  dp[i][0] = 1;
}

for (let i = 2; i <= k; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
  }
}

console.log(dp[k][n]);

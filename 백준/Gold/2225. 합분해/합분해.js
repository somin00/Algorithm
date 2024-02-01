const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const dp = new Array(n + k);
dp[0] = [1];
dp[1] = [1, 1];
for (let i = 2; i < n + k; i++) {
  dp[i] = [];
  dp[i][0] = 1;
  dp[i][i] = 1;
  for (let j = 1; j < i; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 1000000000;
  }
}
console.log(dp[n + k - 1][n]);

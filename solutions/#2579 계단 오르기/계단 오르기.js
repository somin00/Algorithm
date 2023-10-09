const [stairs, ...scores] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = new Array(stairs).fill(0);
dp[0] = scores[0];
dp[1] = scores[0] + scores[1];
dp[2] = Math.max(scores[0], scores[1]) + scores[2];

for (let i = 3; i < dp.length; i++) {
  dp[i] = Math.max(dp[i - 2] + scores[i], dp[i - 3] + scores[i - 1] + scores[i]);
}

console.log(dp[stairs - 1]);

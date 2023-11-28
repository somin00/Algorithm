const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const rgb = input.map((item) => item.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () => [0, 0, 0]);
dp[1] = rgb[0];

for (let i = 2; i < N + 1; i++) {
  dp[i][0] = rgb[i - 1][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = rgb[i - 1][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = rgb[i - 1][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(...dp[N]));

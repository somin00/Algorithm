const [N, ...cases] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const MAX_N = 100;
const dp = new Array(MAX_N + 1).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= MAX_N; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}

for (let i = 0; i < cases.length; i++) {
  console.log(dp[Number(cases[i])]);
}

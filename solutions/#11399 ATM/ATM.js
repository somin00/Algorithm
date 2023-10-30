const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const pi = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const dp = new Array(N).fill(0);
dp[0] = pi[0];

for (let i = 1; i < N; i++) {
  dp[i] = dp[i - 1] + pi[i];
}

const result = dp.reduce((a, c) => a + c);
console.log(result);

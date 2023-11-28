const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const numbers = input[0].split(" ").map(Number);
const dp = new Array(N).fill(0);
dp[0] = numbers[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]);
}

console.log(Math.max(...dp));

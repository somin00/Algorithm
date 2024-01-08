const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const numbers = input[1].split(" ").map(Number);
const dp = Array.from({ length: n }, () => 0);
dp[0] = 1;

for (let i = 1; i < dp.length; i++) {
  let max = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (numbers[i] > numbers[j]) {
      max = Math.max(max, dp[j]);
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));

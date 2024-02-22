const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const numbers = input[1].split(" ").map(Number);
const dp = Array.from({ length: n }, () => 0);
dp[0] = numbers[0];

for (let i = 1; i < dp.length; i++) {
  for (let j = i - 1; j >= 0; j--) {
    if (numbers[i] > numbers[j]) {
      dp[i] = Math.max(dp[j] + numbers[i], dp[i]);
    }
  }
  if (!dp[i]) dp[i] = numbers[i];
}
console.log(Math.max(...dp));

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input.shift();
const m = +input.shift();
const fixNums = input.map(Number);
const dp = Array.from({ length: n + 1 }, () => 0);
dp[0] = 1;
dp[1] = 1;

let fixIdx = 0;
if (fixNums[fixIdx] === 1) fixIdx = 1;

for (let i = 2; i <= n; i++) {
  if (fixNums[fixIdx] === i) {
    dp[i] = dp[i - 1];
    fixIdx++;
  } else if (fixNums[fixIdx - 1] === i - 1) {
    dp[i] = dp[i - 1];
  } else if (fixNums[fixIdx - 1] === i - 2) {
    dp[i] = dp[i - 1] * 2;
  } else {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
}

console.log(dp[n]);

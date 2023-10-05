const numbers = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX_NUM = 11;
const dp = new Array(MAX_NUM).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

let i = 4;
while (i < dp.length) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  i++;
}

for (let j = 1; j < numbers.length; j++) {
  console.log(dp[numbers[j]]);
}

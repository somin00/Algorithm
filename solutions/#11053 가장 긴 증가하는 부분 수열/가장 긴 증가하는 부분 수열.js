const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);
const dp = Array.from({ length: N }, () => 0);
dp[0] = 1;
let cnt = 0;
for (let i = 1; i < dp.length; i++) {
  const values = [1];
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) values.push(dp[j] + 1);
  }

  dp[i] = Math.max(...values);
}

console.log(Math.max(...dp));

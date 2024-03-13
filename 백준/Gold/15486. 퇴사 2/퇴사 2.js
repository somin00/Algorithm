const [N, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const n = +N;
const arr = input.map((item) => item.split(" ").map(Number));
const dp = Array.from({ length: n + 1 }, () => 0);
let max = 0;

for (let i = 0; i < n; i++) {
  max = Math.max(max, dp[i]);

  const [t, p] = arr[i];
  if (i + t <= n) {
    dp[i + t] = Math.max(dp[i + t], max + p);
  }
}

console.log(Math.max(...dp));

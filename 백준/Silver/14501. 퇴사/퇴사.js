const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const dp = Array.from({ length: n }, () => 0);

for (let i = 0; i < n; i++) {
  const [days, cost] = input[i].split(" ").map(Number);
  if (i + days > n) continue;
  dp[i] += cost;
  for (let j = i + days; j < n; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}

console.log(Math.max(...dp));

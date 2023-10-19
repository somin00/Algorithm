const [N, K] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");

const n = Number(N);
const k = Number(K);

const dp = new Array(N + 1).fill(0);

function factorial(x) {
  if (dp[x] > 0) return dp[x];
  if (x === 0 || x === 1) {
    dp[x] = 1;
    return dp[x];
  }
  dp[x] = x * factorial(x - 1);
  return dp[x];
}

console.log(factorial(n) / (factorial(n - k) * factorial(k)));

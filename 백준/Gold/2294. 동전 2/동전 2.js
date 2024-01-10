const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input.shift().split(" ");
const coins = input.map(Number);
const dp = Array.from({ length: +k + 1 }, () => Infinity);
dp[0] = 0;

for (let i = 0; i < coins.length; i++) {
  for (let j = coins[i]; j <= +k; j++) {
    dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
  }
}

if (dp[k] === Infinity) console.log(-1);
else console.log(dp[k]);

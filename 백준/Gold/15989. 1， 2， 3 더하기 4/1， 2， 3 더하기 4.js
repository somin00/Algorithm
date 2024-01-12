const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let T = +input[0];
let i = 1;
const numbers = [1, 2, 3];

while (T-- > 0) {
  const n = +input[i++];
  const dp = Array.from({ length: n + 1 }, () => 1);
  for (let k = 2; k <= numbers.length; k++) {
    for (let j = k; j <= n; j++) {
      if (j - numbers[k - 1] >= 0) {
        dp[j] = Math.max(dp[j], dp[j] + dp[j - numbers[k - 1]]);
      }
    }
  }
  console.log(dp[n]);
}

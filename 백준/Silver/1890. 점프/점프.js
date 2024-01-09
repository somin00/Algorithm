const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const board = input.map((item) => item.split(" ").map(Number));
const dp = Array.from({ length: n }, () => new Array(n).fill(BigInt(0)));

dp[0][0] = BigInt(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const forward = board[i][j];
    if (forward === 0) continue;
    if (i + forward < n) {
      dp[i + forward][j] += dp[i][j];
    }
    if (j + forward < n) {
      dp[i][j + forward] += dp[i][j];
    }
  }
}

console.log(dp[n - 1][n - 1].toString());

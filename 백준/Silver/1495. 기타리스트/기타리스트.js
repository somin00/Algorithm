const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, s, m] = input[0].split(" ").map(Number);
const vList = input[1].split(" ").map(Number);

const dp = Array.from({ length: 51 }, () => new Array(1001).fill(false));
dp[0][s] = true;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= m; j++) {
    if (!dp[i - 1][j]) continue;
    if (j - vList[i - 1] >= 0) {
      dp[i][j - vList[i - 1]] = true;
    }
    if (j + vList[i - 1] <= m) {
      dp[i][j + vList[i - 1]] = true;
    }
  }
}

let answer = -1;

for (let i = 0; i <= m; i++) {
  if (dp[n][i]) {
    if (answer < i) {
      answer = i;
    }
  }
}

console.log(answer);

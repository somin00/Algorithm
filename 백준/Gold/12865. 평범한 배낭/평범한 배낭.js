const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const dp = Array.from({ length: k + 1 }, () => 0);
const arr = input.map((item) => item.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  const [w, v] = arr[i];
  for (let j = k; j >= w; j--) {
    if (dp[j - w] + v > dp[j]) {
      dp[j] = dp[j - w] + v;
    }
  }
}

console.log(dp[k]);

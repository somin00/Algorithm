const n = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

const dp = [0, 1];

for (let i = 2; i <= n; i++) {
  let min_value = Infinity;
  let j = 1;
  while (Math.pow(j, 2) <= i) {
    min_value = Math.min(min_value, dp[i - Math.pow(j, 2)]);
    j += 1;
  }
  dp.push(min_value + 1);
}
console.log(dp[n]);

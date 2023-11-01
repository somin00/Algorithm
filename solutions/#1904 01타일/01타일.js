const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const dp = Array(input + 1).fill(0);
dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[input]);

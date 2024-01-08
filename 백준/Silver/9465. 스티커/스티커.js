const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const t = +input.shift();
let answer = "";

for (let i = 0; i < input.length; i += 3) {
  answer += solution(input.slice(i, i + 3)) + "\n";
}

function solution(arr) {
  const n = +arr.shift();
  const numbers = arr.map((item) => item.split(" ").map(Number));

  if (n === 1) return Math.max(...numbers.flat());

  const dp = Array.from({ length: 2 }, () => Array.from({ length: n }, () => 0));
  dp[0][0] = numbers[0][0];
  dp[1][0] = numbers[1][0];
  dp[0][1] = dp[1][0] + numbers[0][1];
  dp[1][1] = dp[0][0] + numbers[1][1];

  for (let i = 2; i < n; i++) {
    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        dp[j][i] = Math.max(dp[j + 1][i - 2], dp[j + 1][i - 1]) + numbers[j][i];
      }
      if (j === 1) {
        dp[j][i] = Math.max(dp[j - 1][i - 2], dp[j - 1][i - 1]) + numbers[j][i];
      }
    }
  }
  return Math.max(...dp.flat());
}

console.log(answer);

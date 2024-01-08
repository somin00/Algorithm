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

  const dp = Array.from({ length: 2 }, () => Array.from({ length: n + 1 }, () => 0));
  dp[0][1] = numbers[0][0];
  dp[1][1] = numbers[1][0];

  for (let i = 2; i <= n; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + numbers[0][i - 1];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + numbers[1][i - 1];
  }
  return Math.max(...dp.flat());
}

console.log(answer);

const [[N, S], numbers] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

let answer = 0;

function dfs(n, sum, count) {
  if (n === N) {
    if (sum === S && count > 0) answer += 1;
    return;
  }
  dfs(n + 1, sum + numbers[n], count + 1);
  dfs(n + 1, sum, count);
}

dfs(0, 0, 0);

console.log(answer);

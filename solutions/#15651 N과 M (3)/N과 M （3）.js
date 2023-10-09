const [N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(N, M) {
  const seq = new Array(M).fill(0);
  let result = "";

  dfs(0);

  function dfs(x) {
    if (x === M) {
      result += seq.join(" ") + "\n";
      return;
    }
    for (let i = 1; i <= N; i++) {
      seq[x] = i;
      dfs(x + 1);
    }
  }

  return result;
}

console.log(solution(N, M));

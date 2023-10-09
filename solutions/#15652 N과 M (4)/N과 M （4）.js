const [N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(N, M) {
  const seq = [];
  let result = "";

  dfs(0);

  function dfs(x) {
    if (x === M) {
      result += seq.join(" ") + "\n";
      return;
    }
    for (let i = 1; i <= N; i++) {
      const last = seq.at(-1) ?? 0;
      if (last <= i) {
        seq.push(i);
        dfs(x + 1);
        seq.pop();
      }
    }
  }

  return result;
}

console.log(solution(N, M));

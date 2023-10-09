const [N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(N, M) {
  const seq = new Array(M).fill(0);
  const visited = new Array(N).fill(false);
  let result = "";

  dfs(0);

  function dfs(x) {
    if (x === M) {
      const resultArr = [];
      for (let i = 0; i < M; i++) {
        resultArr.push(seq[i]);
      }
      result += resultArr.join(" ") + "\n";
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        if (seq[x - 1] > i) continue;
        seq[x] = i;
        visited[i] = true;
        dfs(x + 1);
        visited[i] = false;
      }
    }
  }

  return result;
}

console.log(solution(N, M));

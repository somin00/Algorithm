const n = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

function solution(n) {
  const seq = new Array(n).fill(0);
  const visited = new Array(n).fill(false);
  let result = "";

  dfs(0);

  function dfs(x) {
    if (x === n) {
      result += seq.join(" ") + "\n";
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        seq[x] = i;
        visited[i] = true;
        dfs(x + 1);
        visited[i] = false;
      }
    }
  }
  return result;
}

console.log(solution(n));

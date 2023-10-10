const [[N, M], numbers] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

function solution(N, M, numbers) {
  const seq = [];
  const visited = new Array(N).fill(false);
  let result = "";
  dfs(0);

  function dfs(n) {
    if (n === M) {
      result += seq.join(" ") + "\n";
      return;
    } else {
      for (let i = 0; i < N; i++) {
        if (!visited[i]) { 
          seq.push(numbers[i]);
          visited[i] = true;
          dfs(n + 1);
          seq.pop();
          visited[i] = false;
        }
      }
    }
  }

  return result;
}

console.log(
  solution(
    N,
    M,
    numbers.sort((a, b) => a - b)
  )
);

const [[N, M], numbersArr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

const numbers = numbersArr.sort((a, b) => a - b);

function solution(N, M) {
  const seq = [];
  const visited = new Array(N).fill(false);
  let result = "";

  dfs(0);

  function dfs(x) {
    if (x === M) {
      result += seq.join(" ") + "|";
      return;
    } else {
      for (let i = 0; i < N; i++) {
        if (!visited[i]) {
          seq.push(numbers[i]);
          visited[i] = true;
          dfs(x + 1);
          seq.pop();
          visited[i] = false;
        }
      }
    }
  }
  return [...new Set(result.split("|"))];
}

let answer = "";
const result = solution(N, M);
for (let i = 0; i < result.length; i++) {
  if (result[i]) answer += result[i] + "\n";
}
console.log(answer);

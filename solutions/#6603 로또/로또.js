const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
for (let i = 0; i < input.length - 1; i++) {
  const [k, ...numbers] = input[i].split(" ").map(Number);
  result += solution(k, numbers) + "\n";
}

function solution(k, numbers) {
  let eachCaseResult = "";
  const seq = new Array(6).fill(0);
  const visited = new Array(k).fill(false);

  dfs(0, 0);

  function dfs(n, s) {
    if (n === 6) {
      eachCaseResult += seq.join(" ") + "\n";
      return;
    }
    for (let i = s; i < k; i++) {
      if (!visited[i]) {
        seq[n] = numbers[i];
        visited[i] = true;
        dfs(n + 1, i + 1);
        visited[i] = false;
      }
    }
  }

  return eachCaseResult;
}

console.log(result);

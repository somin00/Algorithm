const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const k = +input[0];
const signs = input[1].split(" ");
const visited = Array.from({ length: 10 }, () => false);
let max = 0;
let min = Number.MAX_SAFE_INTEGER;

function dfs(number, idx, prev) {
  if (prev.length === k + 1) {
    max = Math.max(max, prev);
    min = Math.min(min, prev);
    return;
  }

  const queue = [[number, idx, prev]];
  while (queue.length) {
    const [cntNum, idx, prevNum] = queue.shift();

    if (signs[idx] === "<") {
      for (let j = cntNum + 1; j <= 9; j++) {
        if (!visited[j]) {
          visited[j] = true;
          dfs(j, idx + 1, prevNum + j);
          visited[j] = false;
        }
      }
    } else {
      for (let j = cntNum - 1; j >= 0; j--) {
        if (!visited[j]) {
          visited[j] = true;
          dfs(j, idx + 1, prevNum + j);
          visited[j] = false;
        }
      }
    }
  }
}

for (let i = 0; i <= 9; i++) {
  visited[i] = true;
  dfs(i, 0, `${i}`);
  visited[i] = false;
}

console.log(max);
console.log(min.toString().padStart(k + 1, "0"));

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m, k] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: n }, () => new Array(m).fill("."));

for (let i = 0; i < k; i++) {
  const [r, c] = input[i].split(" ").map(Number);
  arr[r - 1][c - 1] = "#";
}

const visited = Array.from({ length: n }, () => new Array(m).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let max = 0;

function isValidIdx(x, y) {
  return 0 <= x && x < n && 0 <= y && y < m;
}

function dfs(x, y) {
  const queue = [[x, y]];
  let count = 1;

  while (queue.length) {
    const [cntX, cntY] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const nX = cntX + dx[i];
      const nY = cntY + dy[i];

      if (isValidIdx(nX, nY)) {
        if (!visited[nX][nY] && arr[nX][nY] === "#") {
          visited[nX][nY] = 1;
          count++;
          queue.push([nX, nY]);
        }
      }
    }
  }
  return count;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && arr[i][j] === "#") {
      visited[i][j] = 1;
      const newMax = dfs(i, j);
      max = Math.max(max, newMax);
    }
  }
}

console.log(max);

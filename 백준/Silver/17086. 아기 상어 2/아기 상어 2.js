const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = input.map((item) => item.split(" ").map(Number));
let maxDist = 0;

const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] !== 1) {
      const dist = bfs(i, j);
      maxDist = Math.max(maxDist, dist);
    }
  }
}

function bfs(start, end) {
  const visit = Array.from({ length: n }, () => Array(m).fill(0));
  const queue = [[start, end, 0]];
  visit[start][end] = 1;

  while (queue.length) {
    const [cntX, cntY, count] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const nX = cntX + dx[i];
      const nY = cntY + dy[i];

      if (0 <= nX && nX < n && 0 <= nY && nY < m) {
        if (graph[nX][nY] === 0 && !visit[nX][nY]) {
          queue.push([nX, nY, count + 1]);
          visit[nX][nY] = 1;
        } else if (graph[nX][nY] === 1) return count + 1;
      }
    }
  }
}

console.log(maxDist);

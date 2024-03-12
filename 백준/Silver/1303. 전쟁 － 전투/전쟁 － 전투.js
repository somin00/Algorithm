const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((item) => item.split(""));
const visited = Array.from({ length: m }, () => new Array(n).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const answer = [0, 0];

function isValidIdx(x, y) {
  return 0 <= x && x < m && 0 <= y && y < n;
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
        if (!visited[nX][nY] && arr[x][y] === arr[nX][nY]) {
          visited[nX][nY] = 1;
          count++;
          queue.push([nX, nY]);
        }
      }
    }
  }
  return count;
}

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      visited[i][j] = 1;
      const cntSum = dfs(i, j);
      if (arr[i][j] === "W") answer[0] += cntSum * cntSum;
      else answer[1] += cntSum * cntSum;
    }
  }
}

console.log(answer.join(" "));

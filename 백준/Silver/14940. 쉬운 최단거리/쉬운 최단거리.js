const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.shift().split(" ").map(Number);

const target = [0, 0];
const graph = input.map((item, rowIdx) =>
  item.split(" ").map((elem, colIdx) => {
    if (elem === "2") {
      target[0] = rowIdx;
      target[1] = colIdx;
    }
    return Number(elem);
  })
);

const visited = Array.from({ length: n }, () => new Array(m).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function isValidIdx(x, y) {
  return 0 <= x && x < n && 0 <= y && y < m;
}
function bfs(row, col) {
  const queue = [[row, col, 0]];

  while (queue.length) {
    let [cntx, cnty, count] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cntx + dx[i];
      const ny = cnty + dy[i];

      if (isValidIdx(nx, ny)) {
        if (graph[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = count + 1;
          queue.push([nx, ny, count + 1]);
        }
      }
    }
  }
}

bfs(target[0], target[1]);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1 && visited[i][j] === 0) visited[i][j] = -1;
  }
}

console.log(visited.map((item) => item.join(" ")).join("\n"));

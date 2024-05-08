let [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

n = +n;
arr = arr.map((elem) => elem.split("").map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const queue = [[0, 0, 0]];
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, cost] = queue.shift();

    if (x === n - 1 && y === n - 1) return cost;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          if (arr[nx][ny] === 0) queue.push([nx, ny, cost + 1]);
          else queue.push([nx, ny, cost]);

          queue.sort((a, b) => a[2] - b[2]);
        }
      }
    }
  }
}

const answer = bfs();
console.log(answer);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let T = +input[0];
let i = 1;

const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
const dy = [-2, -1, 1, 2, -2, -1, 1, 2];

const answer = [];

while (T-- > 0) {
  const n = +input[i++];

  const start = input[i++].split(" ").map(Number);
  const end = input[i++].split(" ").map(Number);
  const visited = Array.from({ length: n }, () => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  if (start[0] === end[0] && start[1] === end[1]) {
    answer.push(0);
  } else {
    bfs(n, start, end, visited);
  }
}

function isValid(x, y, n) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

function bfs(n, start, end, visited) {
  const queue = [[...start, 1]];
  visited[start[0]][start[1]] = 1;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx === end[0] && ny === end[1]) {
        answer.push(count);
        return;
      }

      if (isValid(nx, ny, n) && visited[nx][ny] > count + 1) {
        visited[nx][ny] = Math.min(visited[nx][ny], count + 1);
        queue.push([nx, ny, count + 1]);
      }
    }
  }
}

console.log(answer.join("\n"));

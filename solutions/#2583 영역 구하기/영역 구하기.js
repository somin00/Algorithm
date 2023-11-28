const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N, K] = input.shift().split(" ").map(Number);

let board = Array.from({ length: M }, () => new Array(N).fill(1));
const visit = Array.from({ length: M }, () => new Array(N).fill(0));

for (let i = 0; i < K; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  createBoard(x1, y1, x2, y2);
}

function createBoard(x1, y1, x2, y2) {
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      board[j][i] = 0;
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function isValid(x, y) {
  return 0 <= x && x < M && 0 <= y && y < N;
}

let section = 0;
const counts = [];

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1 && !visit[i][j]) {
      bfs(i, j);
      section++;
    }
  }
}

function bfs(row, col) {
  const queue = [[row, col]];
  visit[row][col] = 1;
  let count = 1;
  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isValid(nx, ny)) {
        if (board[nx][ny] === 1 && !visit[nx][ny]) {
          queue.push([nx, ny]);
          visit[nx][ny] = 1;
          count++;
        }
      }
    }
  }
  counts.push(count);
}

console.log(section);
console.log(counts.sort((a, b) => a - b).join(" "));

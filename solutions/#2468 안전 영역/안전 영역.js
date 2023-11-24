const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.map((item) => item.split(" ").map(Number));
let visited = null;

let MAX_HEIGHT = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    MAX_HEIGHT = Math.max(MAX_HEIGHT, arr[i][j]);
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function isValidIdx(x, y) {
  return 0 <= x && x < N && 0 <= y && y < N;
}

let answer = 1;
for (let height = 0; height <= MAX_HEIGHT; height++) {
  answer = Math.max(answer, solution(height));
}

function solution(height) {
  let safeArea = 0;
  const visited = Array.from({ length: N }, () => new Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] > height && !visited[i][j]) {
        visited[i][j] = true;
        bfs(height, i, j, visited);
        safeArea++;
      }
    }
  }
  return safeArea;
}

function bfs(height, row, col, visited) {
  const queue = [[row, col]];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const dirX = x + dx[i];
      const dirY = y + dy[i];

      if (isValidIdx(dirX, dirY)) {
        if (arr[dirX][dirY] > height && !visited[dirX][dirY]) {
          queue.push([dirX, dirY]);
          visited[dirX][dirY] = 1;
        }
      }
    }
  }
}

console.log(answer);

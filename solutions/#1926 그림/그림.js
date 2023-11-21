const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((item) => item.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => false));

let pictureCount = 0;
let maxSize = 0;
let size = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      size = bfs(i, j);
      if (maxSize < size) maxSize = size;
      pictureCount += 1;
    }
  }
}

function bfs(row, col) {
  let queue = [[row, col]];
  let area = 1;

  while (queue.length !== 0) {
    let [x, y] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const dirX = x + dx[i];
      const dirY = y + dy[i];

      if (isValidIdx(dirX, dirY)) {
        if (arr[dirX][dirY] === 1 && !visited[dirX][dirY]) {
          visited[dirX][dirY] = true;
          area++;
          queue.push([dirX, dirY]);
        }
      }
    }
  }
  return area;
}

function isValidIdx(x, y) {
  return 0 <= x && x < N && 0 <= y && y <= M;
}

console.log(pictureCount);
console.log(maxSize);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.map((item) => item.split("").map(Number));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));

let group = 0;
const countArr = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function isValidIdx(x, y) {
  return 0 <= x && x < N && 0 <= y && y < N;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      bfs(i, j);
      group++;
    }
  }
}

function bfs(row, col) {
  const queue = [[row, col]];
  let countInGroup = 1;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const dirX = x + dx[i];
      const dirY = y + dy[i];

      if (isValidIdx(dirX, dirY)) {
        if (arr[dirX][dirY] === 1 && !visited[dirX][dirY]) {
          visited[dirX][dirY] = true;
          queue.push([dirX, dirY]);
          countInGroup += 1;
        }
      }
    }
  }
  countArr.push(countInGroup);
}

const sortedCountArr = countArr.sort((a, b) => a - b);

console.log(group);
console.log(sortedCountArr.join("\n"));

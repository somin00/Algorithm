const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const queue = [];
let day = 0;

let arr = input.map((item, xIdx) =>
  item.split(" ").map((item, yIdx) => {
    if (item === "1") queue.push([xIdx, yIdx]);
    return Number(item);
  })
);

const visited = Array.from({ length: N }, () => new Array(M).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function isValidIdx(x, y) {
  return 0 <= x && x < N && 0 <= y && y < M;
}

let startIdx = 0;
while (queue.length !== 0) {
  const endIdx = queue.length;
  let change = 0;

  for (let i = startIdx; i < endIdx; i++) {
    const [x, y] = queue[i];
    visited[x][y] = 1;

    for (let j = 0; j < dx.length; j++) {
      const dirX = x + dx[j];
      const dirY = y + dy[j];
      if (isValidIdx(dirX, dirY)) {
        if (arr[dirX][dirY] === 0 && !visited[dirX][dirY]) {
          arr[dirX][dirY] = 1;
          visited[dirX][dirY] = 1;
          queue.push([dirX, dirY]);
          change++;
        }
      }
    }
  }

  if (!change) break;
  day++;
  startIdx = endIdx;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i].includes(0)) {
    day = -1;
  }
}
console.log(day);

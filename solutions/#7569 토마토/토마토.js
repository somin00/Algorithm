const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = input.shift().split(" ").map(Number);
let arr = Array.from({ length: H }, () => []);
const visitied = Array.from({ length: H }, () => Array.from({ length: N }, () => new Array(M).fill(false))); //방문여부
const queue = [];
let day = 0;

let z = 0;
for (let i = 0; i < input.length; i++) {
  const line = input[i].split(" ").map(Number);
  line.forEach((value, idx) => {
    if (value === 1) queue.push([i % N, idx, z]);
  });
  arr[z].push(line);
  if ((i + 1) % N === 0) z++;
}

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

function isValidIdx(x, y, z) {
  return 0 <= x && x < N && 0 <= y && y < M && 0 <= z && z < H;
}

let startIdx = 0;
while (queue.length > startIdx) {
  const endIdx = queue.length;
  let change = 0;

  for (let i = startIdx; i < endIdx; i++) {
    const [x, y, z] = queue[i];
    visitied[z][x][y] = true;

    for (let j = 0; j < dx.length; j++) {
      const dirX = x + dx[j];
      const dirY = y + dy[j];
      const dirZ = z + dz[j];

      if (isValidIdx(dirX, dirY, dirZ)) {
        if (arr[dirZ][dirX][dirY] === 0 && !visitied[dirZ][dirX][dirY]) {
          arr[dirZ][dirX][dirY] = 1;
          visitied[dirZ][dirX][dirY] = true;
          queue.push([dirX, dirY, dirZ]);
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
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j].includes(0)) day = -1;
  }
}

console.log(day);

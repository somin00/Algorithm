const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let [r, c, d] = input.shift().split(" ").map(Number);
const rooms = input.map((item) => item.split(" ").map(Number));
const visited = Array.from({ length: n }, () => new Array(m).fill(0));

let cleanCount = 0;
let nearCleanRoom = 0;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while (true) {
  if (nearCleanRoom === 4) {
    const [backX, backY] = [r + dx[(d + 2) % 4], c + dy[(d + 2) % 4]];
    if (rooms[backX][backY] === 1) break;
    else {
      r = backX;
      c = backY;
      nearCleanRoom = 0;
    }
  }

  if (!visited[r][c]) {
    visited[r][c] = 1;
    rooms[r][c] = 2;
    cleanCount += 1;
  }

  const [ccwX, ccwY] = [r + dx[(d + 3) % 4], c + dy[(d + 3) % 4]];
  if (rooms[ccwX][ccwY] === 0) {
    r = ccwX;
    c = ccwY;
    nearCleanRoom = 0;
  } else {
    nearCleanRoom++;
  }

  d = (d + 3) % 4;
}

console.log(cleanCount);

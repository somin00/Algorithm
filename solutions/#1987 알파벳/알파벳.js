const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [R, C] = input.shift().split(" ").map(Number);
const arr = input.map((item) => item.split(""));
const visit = new Array(26).fill(false);
let answer = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function isValidIdx(x, y) {
  return 0 <= x && x < R && 0 <= y && y < C;
}

function DFS(row, col, current) {
  answer = Math.max(answer, current);
  for (let i = 0; i < 4; i++) {
    const dirX = row + dx[i];
    const dirY = col + dy[i];

    if (isValidIdx(dirX, dirY)) {
      if (!visit[arr[dirX][dirY].charCodeAt() - 65]) {
        visit[arr[dirX][dirY].charCodeAt() - 65] = true;
        DFS(dirX, dirY, current + 1);
        visit[arr[dirX][dirY].charCodeAt() - 65] = false;
      }
    }
  }
}

visit[arr[0][0].charCodeAt() - 65] = true;
DFS(0, 0, 1);

console.log(answer);

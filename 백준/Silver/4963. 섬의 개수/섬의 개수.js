let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let start = 0;
let answer = "";

const dx = [-1, 1, 0, 0, -1, 1, -1, 1];
const dy = [0, 0, 1, -1, 1, 1, -1, -1];

while (start < input.length - 1) {
  const [w, h] = input[start].split(" ");
  const testCase = input.slice(start + 1, start + 1 + Number(h)).map((item) => item.split(" ").map(Number));
  const island = solution(w, h, testCase);
  answer += island + "\n";
  start += Number(h) + 1;
}

function solution(row, col, graph) {
  row = Number(row);
  col = Number(col);
  const visited = Array.from({ length: col }, () => new Array(row).fill(0));
  let island = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (graph[i][j] && !visited[i][j]) {
        const queue = [[i, j]];
        visited[i][j] = 1;

        while (queue.length) {
          const [cntX, cntY] = queue.shift();
          for (let k = 0; k < dx.length; k++) {
            const nx = cntX + dx[k];
            const ny = cntY + dy[k];

            if (0 <= nx && nx < col && 0 <= ny && ny < row) {
              if (graph[nx][ny] && !visited[nx][ny]) {
                queue.push([nx, ny]);
                visited[nx][ny] = 1;
              }
            }
          }
        }
        island += 1;
      }
    }
  }
  return island;
}

console.log(answer);

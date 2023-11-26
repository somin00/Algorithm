let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
const answer = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < T; i++) {
  const splited = input.shift().split(" ").map(Number);
  if (splited.length === 3) {
    const [M, N, K] = splited;
    const caseArr = input.slice(0, K);
    input = input.slice(K);
    solution(M, N, K, caseArr);
  }
}

function solution(M, N, K, arr) {
  const board = Array.from({ length: N }, () => new Array(M).fill(0));
  const visit = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let i = 0; i < arr.length; i++) {
    const [x, y] = arr[i].split(" ").map(Number);
    board[y][x] = 1;
  }

  let section = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1 && !visit[i][j]) {
        visit[i][j] = 1;
        bfs(N, M, i, j, board, visit);
        section++;
      }
    }
  }
  answer.push(section);
}

function bfs(N, M, row, col, board, visit) {
  const queue = [[row, col]];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < M) {
        if (board[nx][ny] === 1 && !visit[nx][ny]) {
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

console.log(answer.join("\n"));

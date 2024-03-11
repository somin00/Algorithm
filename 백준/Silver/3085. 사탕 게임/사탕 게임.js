const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const board = input.map((item) => item.split(""));
let answer = 0;

function swapRow(row, col) {
  let temp = board[row][col];
  board[row][col] = board[row + 1][col];
  board[row + 1][col] = temp;
}

function swapCol(row, col) {
  let temp = board[row][col];
  board[row][col] = board[row][col + 1];
  board[row][col + 1] = temp;
}

function countMax() {
  let cntMax = 0;

  for (let i = 0; i < n; i++) {
    let rowCount = 1;
    let colCount = 1;

    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] === board[i][j + 1]) rowCount++;
      else {
        cntMax = Math.max(cntMax, rowCount);
        rowCount = 1;
      }

      if (board[j][i] === board[j + 1][i]) colCount++;
      else {
        cntMax = Math.max(cntMax, colCount);
        colCount = 1;
      }
    }
    cntMax = Math.max(cntMax, rowCount, colCount);
  }
  return cntMax;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 1; j++) {
    if (board[i][j] !== board[i][j + 1]) {
      swapCol(i, j);
      answer = Math.max(answer, countMax());
      swapCol(i, j);
    }

    if (board[j][i] !== board[j + 1][i]) {
      swapRow(j, i);
      answer = Math.max(answer, countMax());
      swapRow(j, i);
    }
  }
}

console.log(answer);

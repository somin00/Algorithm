const n = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let answer = 0;
let board = [];

function hasConflict(row) {
  for (let i = 0; i < row; i++) {
    if (board[i] === board[row]) {
      return true;
    }
    if (Math.abs(board[i] - board[row]) === row - i) {
      return true;
    }
  }
  return false;
}

function findQueen(row) {
  if (row === n) {
    answer++;
    return;
  }

  for (let col = 0; col < n; col++) {
    board[row] = col;
    if (!hasConflict(row)) {
      findQueen(row + 1);
    }
  }
}

findQueen(0);
console.log(answer);

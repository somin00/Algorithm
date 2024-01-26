const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = [];

const answer = [0, 0];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(""));
}

for (let i = 0; i < n; i++) {
  let row = 0;
  let col = 0;
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === ".") row++;
    if (arr[j][i] === ".") col++;

    if (arr[i][j] === "X") {
      if (row >= 2) answer[0]++;
      row = 0;
    }
    if (arr[j][i] === "X") {
      if (col >= 2) answer[1]++;
      col = 0;
    }
  }
  if (row >= 2) answer[0]++;
  if (col >= 2) answer[1]++;
}

console.log(answer.join(" "));

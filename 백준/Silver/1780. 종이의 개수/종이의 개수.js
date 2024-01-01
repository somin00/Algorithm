const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const numbers = input.map((item) => item.split(" ").map(Number));

const result = [0, 0, 0];
function countPaper(x, y, n) {
  const num = numbers[x][y];
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (numbers[x + i][y + j] === num) total++;
      else break;
    }
  }
  if (total === n * n) result[num + 1]++;
  else {
    n /= 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        countPaper(x + i * n, y + j * n, n);
      }
    }
  }
}

countPaper(0, 0, n);
console.log(result.join("\n"));

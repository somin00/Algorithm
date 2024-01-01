const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const paper = input.map((item) => item.split(" ").map(Number));

let whiteCount = 0;
let blueCount = 0;

function findPaper(x, y, half) {
  let total = 0;
  for (let i = 0; i < half; i++) {
    for (let j = 0; j < half; j++) {
      total += paper[y + j][x + i];
    }
  }

  if (total === 0) whiteCount++;
  else if (total === half * half) blueCount++;
  else {
    const newHalf = half / 2;
    findPaper(x, y, newHalf);
    findPaper(x + newHalf, y, newHalf);
    findPaper(x, y + newHalf, newHalf);
    findPaper(x + newHalf, y + newHalf, newHalf);
  }
}

findPaper(0, 0, n);
console.log(whiteCount);
console.log(blueCount);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const quad = input.map((item) => item.split("").map(Number));
const answer = [];
function compressQuad(x, y, half) {
  let total = 0;
  for (let i = 0; i < half; i++) {
    for (let j = 0; j < half; j++) {
      total += quad[y + j][x + i];
    }
  }

  if (total === 0) answer.push("0");
  else if (total === half * half) answer.push("1");
  else {
    answer.push("(");
    const newHalf = half / 2;
    compressQuad(x, y, newHalf);
    compressQuad(x + newHalf, y, newHalf);
    compressQuad(x, y + newHalf, newHalf);
    compressQuad(x + newHalf, y + newHalf, newHalf);
    answer.push(")");
  }
}

compressQuad(0, 0, n);
console.log(answer.join(""));

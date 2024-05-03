const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const nm = input.shift().split(" ");
const n = +nm[0];
const m = +nm[1];

input.sort((a, b) => a - b);
let start = 0;
let end = 0;
let answer = Infinity;

while (input[start] && input[end]) {
  const diff = Math.abs(input[start] - input[end]);
  if (diff === m) {
    answer = diff;
    break;
  } else if (diff > m) {
    answer = Math.min(answer, diff);
    start++;
  } else {
    end++;
  }
}

console.log(answer);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, l] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let fix = 0;
let tape = 0;

for (let i = 0; i < n; i++) {
  if (fix < arr[i]) {
    tape++;
    fix = arr[i] + l - 1;
  }
}

console.log(tape);

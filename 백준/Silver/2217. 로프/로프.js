const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input.map(Number).sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < n; i++) {
  const newTotal = arr[i] * (n - i);
  max = Math.max(max, newTotal);
}

console.log(max);

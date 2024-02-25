const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [h, w] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
let total = 0;

for (let i = 1; i < w - 1; i++) {
  const leftMax = Math.max(...numbers.slice(0, i));
  const rightMax = Math.max(...numbers.slice(i + 1));

  const min = Math.min(leftMax, rightMax);
  if (min > numbers[i]) total += min - numbers[i];
}

console.log(total);

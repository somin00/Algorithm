const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, s] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

if (numbers[0] >= s) {
  console.log(1);
  return;
}

let startIdx = 0;
let endIdx = 1;
let sum = numbers[0] + numbers[1];
let minLength = Number.MAX_SAFE_INTEGER;

while (startIdx <= endIdx) {
  if (sum < s) {
    if (endIdx === numbers.length - 1) break;
    endIdx++;
    sum += numbers[endIdx];
  } else {
    const cntLength = endIdx - startIdx + 1;
    minLength = Math.min(minLength, cntLength);
    sum -= numbers[startIdx];
    startIdx++;
  }
}

if (minLength === Number.MAX_SAFE_INTEGER) {
  console.log(0);
} else {
  console.log(minLength);
}

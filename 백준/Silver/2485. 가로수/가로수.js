const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const diff = [];
for (let i = 1; i < n; i++) {
  diff.push(Number(input[i + 1]) - Number(input[i]));
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

let totalGcd = diff[0];
for (let i = 1; i < diff.length; i++) {
  totalGcd = gcd(totalGcd, diff[i]);
}

let result = 0;
for (let i = 0; i < diff.length; i++) {
  if (diff[i] !== totalGcd) {
    result += diff[i] / totalGcd - 1;
  }
}

console.log(result);

const [N, K] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");

const n = Number(N);
const k = Number(K);

function factorial(x) {
  if (x === 0 || x === 1) return 1;
  return x * factorial(x - 1);
}

console.log(factorial(n) / (factorial(n - k) * factorial(k)));

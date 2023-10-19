const [N, input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const numbers = input.split(" ").map(Number);

let answer = 0;
for (let i = 0; i < N; i++) {
  if (isPrime(numbers[i])) answer++;
}

function isPrime(x) {
  if (x === 1) return false;

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }

  return true;
}

console.log(answer);

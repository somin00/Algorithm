const [M, N] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");

const isPrime = (number) => {
  if (number === 1 || (number !== 2 && number % 2 === 0)) return false;
  for (let j = 3; j <= Math.sqrt(number); j += 2) {
    if (number % j === 0) return false;
  }
  return true;
};

const answer = [];
const solution = (M, N) => {
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) answer.push(i);
  }
  console.log(answer.join("\n"));
};

solution(+M, +N);

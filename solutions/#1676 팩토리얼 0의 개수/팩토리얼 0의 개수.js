const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

function factorial(x) {
  if (x === 0 || x === 1) return 1n;
  return BigInt(x) * factorial(x - 1);
}

const factorialResult = factorial(N).toString();

let answer = 0;
for (let i = factorialResult.length - 1; i >= 0; i--) {
  if (factorialResult[i] === "0") answer++;
  else break;
}
console.log(answer);

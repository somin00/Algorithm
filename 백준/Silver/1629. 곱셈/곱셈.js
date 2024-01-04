const [A, B, C] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const solve = (b) => {
  if (b === 1n) return A % C;
  const half = solve(b / 2n) % C;
  if (b % 2n) {
    return (half * half * (A % C)) % C;
  }
  return (half * half) % C;
};

console.log(solve(B).toString());

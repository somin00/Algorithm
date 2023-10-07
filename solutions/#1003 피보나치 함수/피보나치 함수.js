const [, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX_LENGTH = 40;
const fiboDP = new Array(MAX_LENGTH + 1).fill(0);

fiboDP[0] = [1, 0];
fiboDP[1] = [0, 1];
fiboDP[2] = [1, 1];

for (let i = 3; i < fiboDP.length; i++) {
  const zero = fiboDP[i - 1][0] + fiboDP[i - 2][0];
  const one = fiboDP[i - 1][1] + fiboDP[i - 2][1];
  fiboDP[i] = [zero, one];
}

for (let i = 0; i < input.length; i++) {
  console.log(fiboDP[input[i]].join(" "));
}

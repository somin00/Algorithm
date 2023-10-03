const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")[0];
const memo = new Array(Number(n) + 1);

memo[1] = 1;
memo[2] = 1;

for (let i = 3; i < memo.length; i++) {
  memo[i] = BigInt(memo[i - 1]) + BigInt(memo[i - 2]);
}
console.log(String(memo[n]));

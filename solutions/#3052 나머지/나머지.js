const numbers = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const setNums = new Set();
for (let i = 0; i < numbers.length; i++) {
  const rest = +numbers[i] % 42;
  setNums.add(rest);
}

console.log(setNums.size);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
input.sort((a, b) => a - b);
const inputSet = Array.from(new Set(input));
console.log(inputSet.join("\n"));

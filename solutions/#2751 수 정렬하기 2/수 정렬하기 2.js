const [N, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const sorted = input.sort((a, b) => a - b);

console.log(sorted.join("\n"));

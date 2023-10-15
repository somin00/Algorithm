const [N, arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = arr.split(" ").map(Number);

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(min, max);

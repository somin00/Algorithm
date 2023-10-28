const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const people = input.slice(1).map((item) => item.split(" "));
const result = people.sort((a, b) => +a[0] - +b[0]).map((item) => item.join(" "));
console.log(result.join("\n"));

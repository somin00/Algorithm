const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);
const setArr = Array.from(new Set(arr));
const answer = setArr.sort((a, b) => a - b);
console.log(answer.join(" "));

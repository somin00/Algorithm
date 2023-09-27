const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[1] + " " + input[2];

const strArr = str
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

console.log(strArr);

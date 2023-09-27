const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";

const str = input[1] + " " + input[2];

const strArr = str.split(" ").sort((a, b) => a - b);

strArr.map((item) => (result += item + " "));

console.log(result);

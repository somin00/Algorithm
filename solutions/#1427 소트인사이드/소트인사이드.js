const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

const anwer = input
  .split("")
  .sort((a, b) => b - a)
  .join("");

console.log(anwer);

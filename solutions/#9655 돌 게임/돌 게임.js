const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

const answer = input % 2 === 0 ? "CY" : "SK";
console.log(answer);

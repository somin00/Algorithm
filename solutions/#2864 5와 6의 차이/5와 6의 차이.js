const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");

const min = (num) => +num.replaceAll("6", "5");
const max = (num) => +num.replaceAll("5", "6");

const solution = (input) => {
  const [a, b] = input;

  const minResult = min(a) + min(b);
  const maxResult = max(a) + max(b);

  console.log(minResult, maxResult);
};

solution(input);

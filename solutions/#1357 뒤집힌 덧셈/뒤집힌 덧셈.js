const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");

const rev = (str) => {
  return parseInt(str.split("").reverse().join(""));
};
const solution = (input) => {
  const [x, y] = input;
  console.log(rev(rev(x) + rev(y) + ""));
};

solution(input);

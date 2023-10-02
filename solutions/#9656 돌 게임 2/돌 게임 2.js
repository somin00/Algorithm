const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

solution(Number(input[0]));

function solution(N) {
  let cnt = 1;
  while (N > 1) {
    if (N - 3 >= 1) {
      N -= 3;
    } else if (N - 1 >= 1) {
      N -= 1;
    }
    cnt++;
  }
  cnt % 2 === 0 ? console.log("SK") : console.log("CY");
}

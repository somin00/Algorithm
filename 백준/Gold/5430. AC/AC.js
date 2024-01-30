const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]);

let i = 1;
let answer = "";
while (T-- > 0) {
  const funcArr = input[i++].split("");
  const n = +input[i++];
  const numbers = input[i++].slice(1, -1).split(",").map(Number);

  solution(funcArr, n, numbers);
}

function solution(funcArr, n, numbers) {
  let start = 0;
  let end = n - 1;
  let isReverse = false;

  for (let i = 0; i < funcArr.length; i++) {
    if (funcArr[i] === "R") isReverse = !isReverse;
    else {
      if (start > end) {
        answer += "error\n";
        return;
      }
      if (isReverse) end--;
      else start++;
    }
  }

  const newArr = numbers.slice(start, end + 1);
  if (isReverse) {
    answer += `[${newArr.reverse()}]\n`;
  } else {
    answer += `[${newArr}]\n`;
  }
}

console.log(answer);

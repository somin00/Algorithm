const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

let answer = "";

for (let i = 0; i < T; i++) {
  const caseArr = input.slice(i * 4, i * 4 + 4);
  solution(caseArr);
}

function solution(arr) {
  const N = Number(arr[0]);
  const numbers1 = arr[1].split(" ");
  const M = Number(arr[2]);
  const numbers2 = arr[3].split(" ");

  const numbersMap = new Map();

  for (let i = 0; i < numbers1.length; i++) {
    numbersMap.set(numbers1[i], 1);
  }

  for (let i = 0; i < numbers2.length; i++) {
    answer += numbersMap.has(numbers2[i]) ? "1\n" : "0\n";
  }
}

console.log(answer);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split(" ").map(Number);
const testCases = input.slice(2);

let answer = "";
const sectionSum = new Array(numbers.length + 1).fill(0);

for (let i = 0; i < numbers.length; i++) {
  sectionSum[i + 1] = sectionSum[i] + numbers[i];
}

for (let i = 0; i < testCases.length; i++) {
  const [start, end] = testCases[i].split(" ");
  answer += sectionSum[+end] - sectionSum[+start - 1] + "\n";
}

console.log(answer);

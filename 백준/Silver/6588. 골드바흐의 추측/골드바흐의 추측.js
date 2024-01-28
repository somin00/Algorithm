const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const max = Math.max(...input);
let primeArr = Array.from({ length: max + 1 }, () => true);
primeArr[0] = false;
primeArr[1] = false;

let answer = "";

for (let i = 2; i * i <= max; i++) {
  if (primeArr[i]) {
    let multiple = 2;

    while (i * multiple < max) {
      primeArr[i * multiple] = false;
      multiple++;
    }
  }
}

function getExpression(target) {
  for (let i = 3; i < target; i += 2) {
    if (i > target - i) break;
    if (primeArr[i] && primeArr[target - i]) {
      answer += `${target} = ${i} + ${target - i}\n`;
      return;
    }
  }
  answer += "Goldbach's conjecture is wrong.\n";
}

for (let i = 0; i < input.length - 1; i++) {
  getExpression(+input[i]);
}

console.log(answer);

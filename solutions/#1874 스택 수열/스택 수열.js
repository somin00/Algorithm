const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const sequence = input.map(Number);
const stack = [];
let answer = "";

let head = 0;
for (let i = 0; i < n; i++) {
  stack.push(i + 1);
  answer += "+\n";

  while (stack.length !== 0 && head < sequence.length) {
    const last = stack[stack.length - 1];
    if (sequence[head] === last) {
      stack.pop();
      head++;
      answer += "-\n";
    } else {
      break;
    }
  }
}

if (head !== sequence.length) {
  console.log("NO");
  return;
}

console.log(answer);

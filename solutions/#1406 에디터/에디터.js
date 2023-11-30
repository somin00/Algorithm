const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let stack1 = input[0].split("");
let stack2 = [];

const M = Number(input[1]);

for (let i = 2; i < 2 + M; i++) {
  const [command, char] = input[i].split(" ");

  if (command === "L" && stack1.length) stack2.push(stack1.pop());
  if (command === "D" && stack2.length) stack1.push(stack2.pop());
  if (command === "B") stack1.pop();
  if (command === "P") stack1.push(char);
}

let answer = stack1.join("");
answer += stack2.reverse().join("");
console.log(answer);

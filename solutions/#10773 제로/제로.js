const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const k = +input[0];
const numbers = input.slice(1).map(Number);

const stack = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) stack.pop();
  else stack.push(numbers[i]);
}

if (stack.length === 0) console.log(0);
else {
  const result = stack.reduce((a, c) => a + c);
  console.log(result);
}

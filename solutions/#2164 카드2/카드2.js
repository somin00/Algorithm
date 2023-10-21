const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

let stack1 = Array.from({ length: N }, (_, idx) => N - idx);
let stack2 = [];
let isLast = false;

while (stack1.length + stack2.length !== 1) {
  const top = stack1.pop();
  if (isLast) stack2.push(top);
  isLast = !isLast;
  if (stack1.length === 0) {
    stack1 = stack2.reverse();
    stack2 = [];
  }
}
console.log(stack1[0]);

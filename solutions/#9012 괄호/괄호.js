const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const result = [];

for (let i = 0; i < N; i++) {
  const arr = input[i].split("");
  checkIsVPS(arr);
}

function checkIsVPS(arr) {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ")") {
      const last = stack.at(-1);
      if (last === "(") stack.pop();
      else {
        stack.push(arr[i]);
      }
    } else {
      stack.push(arr[i]);
    }
  }
  if (stack.length === 0) result.push("YES");
  else result.push("NO");
}

console.log(result.join("\n"));

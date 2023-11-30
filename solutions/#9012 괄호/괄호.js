const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let result = "";

for (let i = 0; i < N; i++) {
  const arr = input[i].split("");
  checkIsVPS(arr);
}

function checkIsVPS(arr) {
  let stack = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") stack += 1;
    else {
      stack -= 1;
      if (stack < 0) break;
    }
  }
  result += stack === 0 ? "YES\n" : "NO\n";
}

console.log(result);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, x] = input.shift().split(" ").map(Number);
const visitors = input[0].split(" ").map(Number);

let max = 0;
let count = 0;

let start = 0;
let end = 0;

let sum = 0;

while (start < n) {
  sum += visitors[end++];
  if (end - start >= x) {
    if (max < sum) {
      count = 1;
      max = sum;
    } else if (max === sum) {
      count += 1;
    }

    sum -= visitors[start++];
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max + "\n" + count);
}

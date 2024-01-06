const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const people = input.shift().split(" ").map(Number);
const [b, c] = input[0].split(" ").map(Number);

let answer = 0;

function getCount(total) {
  let count = 1;
  if (total > 0) {
    count += Math.ceil(total / c);
  }
  return count;
}
for (let i = 0; i < n; i++) {
  answer += getCount(people[i] - b);
}

console.log(answer);

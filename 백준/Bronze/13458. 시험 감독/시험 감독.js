const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const people = input.shift().split(" ").map(Number);
const [b, c] = input[0].split(" ").map(Number);

let answer = 0;
const obj = {};
function getCount(total) {
  let count = 1;
  total -= b;
  if (total > 0) {
    count += Math.ceil(total / c);
  }
  return count;
}
for (let i = 0; i < n; i++) {
  if (obj[people[i]]) answer += obj[people[i]];
  else {
    answer += getCount(people[i]);
  }
}

console.log(answer);

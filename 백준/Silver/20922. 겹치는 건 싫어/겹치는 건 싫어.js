const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const obj = {};
const numbers = input[0].split(" ").map((item) => {
  obj[item] = 0;
  return Number(item);
});
let max = -1;

let start = 0;
let end = 1;

obj[numbers[start]] = 1;
obj[numbers[end]] = 1;

while (true) {
  if (obj[numbers[end + 1]] + 1 <= k) {
    end += 1;
    obj[numbers[end]]++;
  } else {
    max = Math.max(max, end - start + 1);
    while (obj[numbers[end + 1]] + 1 > k) {
      obj[numbers[start]]--;
      start += 1;
    }
  }

  if (end === numbers.length - 1) {
    max = Math.max(max, end - start + 1);
    break;
  }
}

console.log(max);

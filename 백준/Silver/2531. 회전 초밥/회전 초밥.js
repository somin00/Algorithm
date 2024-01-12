const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, d, k, c] = input.shift().split(" ").map(Number);
const numbers = input.map(Number);
const count = Array.from({ length: d + 1 }, () => 0);
let maxCount = 0;

let start = 0;
let end = 0;
let duplicate = 0;

while (start <= n) {
  if (count[numbers[end % n]]) {
    duplicate++;
  }
  count[numbers[end % n]]++;
  end++;
  if (Math.abs(end - start) >= k) {
    let newMax = 0;
    if (duplicate) newMax = k - duplicate;
    else newMax = k;

    if (!count[c]) newMax += 1;

    maxCount = Math.max(maxCount, newMax);

    if (count[numbers[start % n]] > 1) duplicate--;
    count[numbers[start % n]]--;
    start++;
  }
}

console.log(maxCount);

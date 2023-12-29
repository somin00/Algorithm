const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const times = input.map((item) => item.split(" ").map(Number));
times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = 0;
let lastEnd = 0;
for (let i = 0; i < times.length; i++) {
  const [start, end] = times[i];
  if (lastEnd <= start) {
    answer++;
    lastEnd = end;
  }
}
console.log(answer);

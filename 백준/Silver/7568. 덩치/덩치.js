const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input.map((item, idx) => item.split(" ").map(Number));
const answer = [];

for (let i = 0; i < n; i++) {
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (i !== j) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) count++;
    }
  }
  answer.push(count + 1);
}

console.log(answer.join(" "));

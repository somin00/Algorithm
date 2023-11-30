const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const queue = Array.from({ length: N }, (_, idx) => idx + 1);
const answer = [];

let count = 1;

while (queue.length) {
  const firstNum = queue.shift();
  if (count % K === 0) {
    answer.push(firstNum);
  } else {
    queue.push(firstNum);
  }
  count++;
}

console.log(`<${answer.join(", ")}>`);

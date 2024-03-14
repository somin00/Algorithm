const [A, B] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = new Map();

function bfs(number) {
  const queue = [[number, 0]];
  visited.set(number, 0);

  while (queue.length) {
    const [num, count] = queue.shift();
    const calculation = [num * 2, String(num) + "1"];
    for (let i = 0; i < 2; i++) {
      const newNum = calculation[i];
      const newCount = count + 1;
      if (!visited.get(newNum) || visited.get(newNum) < newCount) {
        if (newNum <= B) {
          queue.push([newNum, newCount]);
          visited.set(Number(newNum), newCount);
        }
      }
    }
  }
}

bfs(A);

const answer = visited.get(B);
if (answer) {
  console.log(answer + 1);
} else {
  console.log(-1);
}

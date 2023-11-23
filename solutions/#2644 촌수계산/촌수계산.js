const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const [start, end] = input.shift().split(" ").map(Number);
const M = Number(input.shift());

const relation = Array.from({ length: N + 1 }, () => []);
const visitied = Array.from({ length: N + 1 }, () => 0);
const queue = [];

for (let i = 0; i < M; i++) {
  const [parent, child] = input[i].split(" ").map(Number);
  relation[parent].push(child);
  relation[child].push(parent);
}

function bfs(start) {
  queue.push(...relation[start]);
  let count = 1;

  while (queue.length !== 0) {
    const newStart = queue.shift();
    if (relation[newStart] && !visitied[newStart]) {
      visitied[newStart] = count + 1;
      queue.push(...relation[newStart]);
    }

    const near = relation[newStart];
    if (near) {
      for (let i = 0; i < near.length; i++) {
        if (relation[near[i]] && !visitied[near[i]]) {
          visitied[near[i]] = visitied[newStart] + 1;
          queue.push(...relation[near[i]]);
        }
      }
    }
  }

  return -1;
}

bfs(start);
console.log(visitied[end] - 1);

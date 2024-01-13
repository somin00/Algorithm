const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const visited = Array.from({ length: 100100 }, () => 0);

function bfs(cnt) {
  const queue = [[cnt, 0]];
  visited[cnt] = 1;
  while (queue.length) {
    const [position, time] = queue.shift();
    if (position === k) return time;

    for (let x of [position * 2, position - 1, position + 1]) {
      if (x >= 0 && x <= 100000 && !visited[x]) {
        visited[x] = 1;
        if (x === position * 2) queue.unshift([x, time]);
        else queue.push([x, time + 1]);
      }
    }
  }
  return bfs(n);
}

const result = bfs(n);
console.log(result);

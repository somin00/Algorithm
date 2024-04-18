const [n, k] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visit = Array.from({ length: 100001 }, () => 0);
const path = Array.from({ length: 100001 }, () => 0);

function bfs(start) {
  const queue = [[start, 0]];
  visit[start] = 1;

  while (queue.length) {
    const [cnt, time] = queue.shift();
    if (cnt === k) return time;
    const calced = [cnt - 1, cnt + 1, cnt * 2];

    for (let i = 0; i < calced.length; i++) {
      const next = calced[i];
      if (!visit[next] && next >= 0 && next <= 100000) {
        path[next] = cnt;
        visit[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
}

const time = bfs(n);
const order = [k];
let prev = path[k];

for (let i = 0; i < time; i++) {
  order.push(prev);
  prev = path[prev];
}

console.log(time);
console.log(order.reverse().join(" "));

const [n, k] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dist = Array.from({ length: 100001 }, () => 0);
const count = Array.from({ length: 100001 }, () => 0);

if (n == k) {
  console.log(0);
  console.log(1);
  return;
}

function bfs(start) {
  const queue = [start];
  count[start] = 1;

  while (queue.length) {
    const cnt = queue.shift();
    const calced = [cnt - 1, cnt + 1, cnt * 2];

    for (let i = 0; i < calced.length; i++) {
      const next = calced[i];
      if (next >= 0 && next <= 100000) {
        if (dist[next] === 0) {
          queue.push(next);
          dist[next] = dist[cnt] + 1;
          count[next] += count[cnt];
        } else if (dist[next] === dist[cnt] + 1) {
          count[next] += count[cnt];
        }
      }
    }
  }
}

bfs(n);
console.log(dist[k]);
console.log(count[k]);

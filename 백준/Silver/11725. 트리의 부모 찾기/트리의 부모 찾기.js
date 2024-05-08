let [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

n = +n;
const parent = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => 0);

for (let i = 0; i < arr.length; i++) {
  const [p, c] = arr[i].split(" ").map(Number);
  parent[p].push(c);
  parent[c].push(p);
}
const queue = [1];
visited[1] = 1;
while (queue.length) {
  const cnt = queue.shift();

  parent[cnt].forEach((node) => {
    if (!visited[node]) {
      queue.push(node);
      visited[node] = cnt;
    }
  });
}

console.log(visited.slice(2).join("\n"));

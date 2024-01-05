const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: n }, () => 0);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ");
  graph[a].push(b);
  graph[b].push(a);
}
graph.forEach((item) => item.sort((a, b) => a - b));

let count = 1;
function dfs(start) {
  visited[start - 1] = count++;
  for (let node of graph[start]) {
    if (!visited[node - 1]) {
      dfs(+node);
    }
  }
}

dfs(r);

console.log(visited.join("\n"));

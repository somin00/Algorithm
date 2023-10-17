const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");
const [N, edge, start] = input[0].split(" ").map(Number);
const nodes = input.slice(1);

const graph = [...Array(N + 1)].map(() => []);

for (let i = 0; i < edge; i++) {
  const [from, to] = nodes[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

function dfs(start) {
  const result = [];
  let needVisit = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const targetNode = needVisit.shift();
    if (!result.includes(targetNode)) {
      result.push(targetNode);
      const nodes = graph[targetNode].sort((a, b) => a - b);
      needVisit = [...nodes, ...needVisit];
    }
  }

  return result.join(" ");
}

function bfs(start) {
  const result = [];
  let needVisit = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const targetNode = needVisit.shift();
    if (!result.includes(targetNode)) {
      result.push(targetNode);
      const nodes = graph[targetNode].sort((a, b) => a - b);
      needVisit = [...needVisit, ...nodes];
    }
  }

  return result.join(" ");
}
console.log(dfs(start));
console.log(bfs(start));

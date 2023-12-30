const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const nodes = input.map((item) => item.split(" ").map(Number));
const graph = Array.from({ length: n }, () => new Array(n).fill(0));

for (let i = 0; i < nodes.length; i++) {
  const [node1, node2] = nodes[i];
  graph[node1 - 1][node1 - 1] = 1;
  graph[node2 - 1][node2 - 1] = 1;
  graph[node1 - 1][node2 - 1] = 1;
  graph[node2 - 1][node1 - 1] = 1;
}

function solution(n, map) {
  let count = 0;
  const visited = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count += 1;
      findOne(map, visited, i);
    }
  }
  return count;
}

function findOne(map, visited, node) {
  visited[node] = 1;
  for (let i = 0; i < map[node].length; i++) {
    if (map[node][i] && !visited[i]) {
      findOne(map, visited, i);
    }
  }
}

console.log(solution(n, graph));

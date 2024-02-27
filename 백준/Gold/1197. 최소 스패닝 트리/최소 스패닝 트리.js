const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [v, e] = input.shift().split(" ").map(Number);
const vWithWeight = input.map((elem) => elem.split(" ").map(Number));
vWithWeight.sort((a, b) => a[2] - b[2]);

function solution(graph) {
  let sum = 0;
  const parent = Array.from({ length: v }, (_, i) => i);

  const compare = (parent, a, b) => {
    a = find(parent, a);
    b = find(parent, b);
    return a === b;
  };

  const find = (parent, x) => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent, parent[x]));
  };

  const union = (parent, a, b) => {
    a = find(parent, a);
    b = find(parent, b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
  };

  for (let i = 0; i < graph.length; i++) {
    const [a, b, c] = graph[i];
    if (!compare(parent, a, b)) {
      sum += c;
      union(parent, a, b);
    }
  }
  console.log(sum);
}
solution(vWithWeight);

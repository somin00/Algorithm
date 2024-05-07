let [n, m, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

n = +n;
m = +m;
const graph = Array.from({ length: n }, () => new Array(n).fill(Infinity));

for (let i = 0; i < arr.length; i++) {
  const [from, to, cost] = arr[i].split(" ").map(Number);
  graph[from - 1][to - 1] = Math.min(graph[from - 1][to - 1], cost);
}

for (let mid = 0; mid < n; mid++) {
  for (let start = 0; start < n; start++) {
    for (let end = 0; end < n; end++) {
      if (start === end) {
        graph[start][end] = 0;
        continue;
      }
      if (graph[start][end] > graph[start][mid] + graph[mid][end])
        graph[start][end] = graph[start][mid] + graph[mid][end];
    }
  }
}

for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[i].length; j++) {
    if (graph[i][j] === Infinity) graph[i][j] = 0;
  }
}
console.log(graph.map((elem) => elem.join(" ")).join("\n"));

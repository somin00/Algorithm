const [input, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input;
const graph = arr.map((elem) => elem.split(" ").map(Number));

for (let mid = 0; mid < n; mid++) {
  for (let start = 0; start < n; start++) {
    for (let end = 0; end < n; end++) {
      if (graph[start][mid] === 1 && graph[mid][end] === 1) graph[start][end] = 1;
    }
  }
}

console.log(graph.map((elem) => elem.join(" ")).join("\n"));

let [input, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);

const tree = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < n - 1; i++) {
  const [a, b, c] = arr[i].split(" ").map(Number);
  tree[a].push([b, c]);
  tree[b].push([a, c]);
}

function bfs(start, end) {
  const visited = Array.from({ length: n + 1 }, () => 0);

  const queue = [[start, 0]];
  visited[start] = 1;

  while (queue.length) {
    const [cnt, dist] = queue.shift();

    if (cnt === end) return dist;

    tree[cnt].forEach((node) => {
      const [newNode, newDist] = node;
      if (!visited[newNode]) {
        queue.push([newNode, dist + newDist]);
        visited[newNode] = 1;
      }
    });
  }

  return;
}

for (let i = n - 1; i < n + m - 1; i++) {
  const [start, end] = arr[i].split(" ").map(Number);
  const dist = bfs(start, end);
  console.log(dist);
}

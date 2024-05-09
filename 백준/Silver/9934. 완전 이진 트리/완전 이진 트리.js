let [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

n = +n;
arr = arr[0].split(" ").map(Number);
const tree = Array.from({ length: n }, () => []);

function dfs(arr, depth) {
  if (arr.length === 0) return;
  let mid = (arr.length - 1) / 2;
  tree[depth].push(arr[mid]);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid + 1);
  dfs(left, depth + 1);
  dfs(right, depth + 1);
}

dfs(arr, 0);
console.log(tree.map(elem=>elem.join(" ")).join("\n"));

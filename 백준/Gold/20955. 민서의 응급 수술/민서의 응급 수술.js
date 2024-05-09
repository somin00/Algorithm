let [input, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);
const tree = Array.from({ length: n + 1 }, () => []);
const parent = Array.from({ length: n + 1 }, () => -1);

function getParent(arr, n) {
  if (arr[n] < 0) return n;
  return (arr[n] = getParent(arr, arr[n]));
}

function unionParent(arr, a, b) {
  a = getParent(arr, a);
  b = getParent(arr, b);

  if (a === b) return false;
  if (a !== b) parent[b] = a;
  return true;
}

let cut = 0;
for (let i = 0; i < m; i++) {
  const [a, b] = arr[i].split(" ").map(Number);

  if (!unionParent(parent, a, b)) {
    cut++;
  }
}

for (let i = 1; i <= n; i++) {
  if (parent[i] < 0) cut++;
}
console.log(cut - 1);

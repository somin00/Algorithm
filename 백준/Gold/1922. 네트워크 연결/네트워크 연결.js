const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const m = +input[1];

let answer = 0;
let count = 0;

const costs = [];
for (let i = 2; i < input.length; i++) {
  costs.push(input[i].split(" ").map(Number));
}

costs.sort((a, b) => a[2] - b[2]);

const parentArr = Array.from({ length: n }, (_, i) => i);

function getParent(arr, n) {
  if (arr[n] === n) return n;
  return (arr[n] = getParent(arr, arr[n]));
}

function unionParent(arr, a, b) {
  a = getParent(arr, a);
  b = getParent(arr, b);

  if (a < b) arr[b] = a;
  else arr[a] = b;
}

function findParent(arr, a, b) {
  a = getParent(arr, a);
  b = getParent(arr, b);

  if (a === b) return true;
  else return false;
}

for (const cost of costs) {
  if (count > m) return;
  if (!findParent(parentArr, cost[0], cost[1])) {
    answer += cost[2];
    unionParent(parentArr, cost[0], cost[1]);
    count++;
  }
}

console.log(answer);

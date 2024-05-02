const input = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

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

for (let i = 1; i < input.length; i++) {
  const [operator, from, to] = input[i].split(" ").map(Number);

  if (operator === 0) {
    unionParent(parentArr, from, to);
  } else if (operator === 1) {
    if (findParent(parentArr, from, to)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

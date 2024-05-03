const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;
let answer = "";
while (true) {
  const [m, n] = input[i].split(" ").map(Number);
  if (m === 0 && n === 0) break;
  const arr = input.slice(i + 1, i + n + 1).map((elem) => elem.split(" ").map(Number));
  answer += solution(m, arr) + "\n";
  i += n + 1;
}

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

function solution(m, cost) {
  let answer = 0;
  const parent = Array.from({ length: m }, (_, i) => i);
  cost.sort((a, b) => a[2] - b[2]);

  for (const each of cost) {
    const [a, b, fee] = each;
    answer += fee;
    if (!findParent(parent, a, b)) {
      answer -= fee;
      unionParent(parent, a, b);
    }
  }

  return answer;
}

console.log(answer);

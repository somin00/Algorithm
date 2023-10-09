const [number, count] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const seq = new Array(count).fill(0);
const visited = new Array(number).fill(false);
let result = "";

function dfs(k) {
  if (k === count) {
    const resultArr = [];
    for (let i = 0; i < count; i++) {
      resultArr.push(seq[i]);
    }
    result += resultArr.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= number; i++) {
    if (!visited[i]) {
      seq[k] = i;
      visited[i] = true;
      dfs(k + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(result);

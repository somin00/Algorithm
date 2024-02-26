const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const alphabet = Array.from({ length: 26 }, () => 0);
let canTeach = k - 5;
let totalCount = 0;

if (canTeach < 0) {
  console.log(0);
  return;
}

alphabet[0] = 1;
alphabet[2] = 1;
alphabet[8] = 1;
alphabet[13] = 1;
alphabet[19] = 1;

function dfs(index, canTeach) {
  if (canTeach < 0) return;

  if (canTeach === 0) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      let isPossible = true;
      for (let j = 0; j < input[i].length; j++) {
        if (alphabet[input[i][j].charCodeAt() - 97] === 0) {
          isPossible = false;
          break;
        }
      }
      if (isPossible) count++;
    }
    totalCount = Math.max(totalCount, count);
  }

  for (let i = index; i < 26; i++) {
    if (alphabet[i] === 0) {
      alphabet[i] = 1;
      dfs(i, canTeach - 1);
      alphabet[i] = 0;
    }
  }
}

dfs(0, canTeach);

console.log(totalCount);

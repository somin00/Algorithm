const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
let answer = "";

for (let i = 0; i < T; i++) {
  const arr = input.slice(i * 3, i * 3 + 3);
  solution(arr);
}

function solution(arr) {
  const [N, M] = arr[0].split(" ").map(Number);
  const A = arr[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const B = arr[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  findPair(A, B);
}

function findPair(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    let start = 0;
    let end = b.length - 1;

    while (start <= end) {
      if (a[i] <= b[start]) {
        break;
      } else {
        if (a[i] <= b[end]) {
          end--;
        } else {
          count += end - start + 1;
          break;
        }
      }
    }
  }
  answer += count + "\n";
}

console.log(answer);

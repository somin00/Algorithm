const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const graph = input.map((item) => item.split(" ").map((item) => Number(item)));
const numbers = Array.from({ length: n - 1 }, (_, idx) => idx + 2);

function getComb(arr, selectedNum) {
  const results = [];
  if (selectedNum === 1) return arr.map((item) => [1, item]);
  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const comb = getComb(rest, selectedNum - 1);
    const attached = comb.map((item) => [fixed, ...item]);
    results.push(...attached);
  });
  return results;
}

// function getSum(arr) {
//   console.log(arr);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       sum += graph[arr[i] - 1][arr[j] - 1];
//     }
//   }
//   return sum;
// }

const comb = getComb(numbers, n / 2 - 1);
let answer = Infinity;
for (let i = 0; i < comb.length; i++) {
  const arr = comb[i];
  let sum1 = 0;
  let sum2 = 0;

  for (let j = 0; j < n; j++) {
    const idx = arr.indexOf(j + 1);
    if (idx > -1) {
      for (let k = 0; k < arr.length; k++) {
        sum1 += graph[arr[idx] - 1][arr[k] - 1];
      }
    } else {
      for (let k = 0; k < n; k++) {
        if (!arr.includes(k + 1)) {
          sum2 += graph[j][k];
        }
      }
    }
  }
  const diff = Math.abs(sum2 - sum1);

  answer = Math.min(answer, diff);
}

console.log(answer);

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const dict = new Map();
let maxCount = 0;
const answer = [];

const sortAlphabet = (a, b, n) => {
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      return a[i].charCodeAt() - b[i].charCodeAt();
    }
  }
};

for (let i = 0; i < n; i++) {
  if (input[i].length >= m) {
    dict.set(input[i], (dict.get(input[i]) || 0) + 1);
    maxCount = Math.max(dict.get(input[i]), maxCount);
  }
}

for (let i = maxCount; i >= 1; i--) {
  const cntArr = [];
  for (const [key, value] of dict.entries()) {
    if (value === i) cntArr.push(key);
  }

  if (cntArr.length > 1) {
    cntArr.sort((a, b) => {
      if (a.length === b.length) return sortAlphabet(a, b, a.length);
      return b.length - a.length;
    });
  }

  answer.push(...cntArr);
}

console.log(answer.join("\n"));

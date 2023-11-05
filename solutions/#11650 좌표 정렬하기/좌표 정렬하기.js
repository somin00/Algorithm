const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const count = +input[0];

let arr = [];

for (let i = 1; i <= count; i++) {
  arr.push(input[i].split(" ").map((item) => Number(item)));
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let ans = [];

for (let i = 0; i < count; i++) {
  let answer = arr[i].join(" ");
  ans.push(answer);
}

console.log(ans.join("\n"));

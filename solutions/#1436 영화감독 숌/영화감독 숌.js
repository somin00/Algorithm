const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

const all = new Array(10000 + 1).fill(0);

let i = 1;
let j = 666;
while (i <= N) {
  if (j.toString().includes("666")) {
    all[i] = j;
    i++;
  }
  j++;
}

console.log(all[N]);

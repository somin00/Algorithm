const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const siteList = input.slice(1, N + 1);
const findList = input.slice(N + 1);

const siteObj = {};

for (let i = 0; i < N; i++) {
  const [siteName, password] = siteList[i].split(" ");
  siteObj[siteName] = password;
}

let result = "";
for (let i = 0; i < M; i++) {
  result += siteObj[findList[i]] + "\n";
}

console.log(result);

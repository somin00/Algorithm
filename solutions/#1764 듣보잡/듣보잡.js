const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");
const noHear = input.slice(1, +N + 1);
const noSee = input.slice(+N + 1);

const answer = [];
const set = new Set(noHear);
for (let i = 0; i < noSee.length; i++) {
  if (set.has(noSee[i])) answer.push(noSee[i]);
}

console.log(answer.length);
console.log(answer.sort().join("\n"));

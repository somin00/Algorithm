const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) console.log("right");
  else console.log("wrong");
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();
const result = input
  .split("-")
  .map((item) => {
    const sum = item
      .split("+")
      .map(Number)
      .reduce((a, c) => a + c);
    return sum;
  })
  .reduce((a, c) => a - c);

console.log(result);

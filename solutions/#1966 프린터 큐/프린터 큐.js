const [N, ...testCases] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const cases = [];
let answer = "";

for (let i = 0; i < testCases.length; i += 2) {
  cases.push(testCases.slice(i, i + 2));
}

for (let j = 0; j < cases.length; j++) {
  let [N, M] = cases[j][0].split(" ").map(Number);
  const importance = cases[j][1].split(" ").map(Number);

  let count = 0;

  while (true) {
    const max = Math.max(...importance);
    const printer = importance.shift();

    if (printer === max) {
      count++;
      if (M === 0) {
        answer += count + "\n";
        break;
      }
    } else {
      importance.push(printer);
    }

    if (M === 0) {
      M = importance.length - 1;
    } else {
      M--;
    }
  }
}

console.log(answer);

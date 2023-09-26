let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let result = "";
  const arr = input.map((str) => str.split(" "));
  for (let i = 0; i < arr.length - 1; i++) {
    let answer = 0;
    let [l, p, v] = arr[i].map(Number);

    while (v > p) {
      v -= p;
      answer += l;
    }

    if (l > v) answer += v;
    else answer += l;

    result += `Case ${i + 1}: ${answer}\n`;
  }
  console.log(result);
};

solution(input);

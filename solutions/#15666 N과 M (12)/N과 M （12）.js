const [[N, M], numbersArr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

const numbers = numbersArr.sort((a, b) => a - b);

function solution(N, M) {
  const seq = [];
  let result = "";

  dfs(0);

  function dfs(x) {
    let used = 0;
    if (x === M) {
      result += seq.join(" ") + "\n";
      return;
    } else {
      for (let i = 0; i < N; i++) {
        const last = seq.at(-1) ?? 0;
        if (used !== numbers[i] && last <= numbers[i]) {
          seq.push(numbers[i]);
          dfs(x + 1);
          seq.pop();
          used = numbers[i];
        }
      }
    }
  }
  return result;
}

console.log(solution(N, M));

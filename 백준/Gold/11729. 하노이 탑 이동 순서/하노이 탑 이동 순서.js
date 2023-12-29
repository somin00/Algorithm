const n = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

const result = [];
function hanoi(n, start, end, middle) {
  if (n === 1) {
    result.push([start, end]);
    return;
  }
  hanoi(n - 1, start, middle, end);
  result.push([start, end]);
  hanoi(n - 1, middle, end, start);
}

hanoi(n, 1, 3, 2);

const answer = result.map((item) => item.join(" "));
console.log(result.length);
console.log(answer.join("\n"));

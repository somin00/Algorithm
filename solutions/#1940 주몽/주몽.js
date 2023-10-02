const [N, M, numbers] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (N, M, numbers) => {
  numbers = numbers
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let count = 0;
  let start = 0;
  let end = N - 1;

  while (start < end) {
    if (numbers[start] + numbers[end] === +M) {
      count++;
      start++;
      end--;
    } else if (numbers[start] + numbers[end] < +M) {
      start++;
    } else if (numbers[start] + numbers[end] > +M) {
      end--;
    }
  }

  console.log(count);
};

solution(N, M, numbers);

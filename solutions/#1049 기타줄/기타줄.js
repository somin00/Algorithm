const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const packageMin = Math.min(...input.slice(1).map((x) => Number(x.split(" ")[0])));
const perMin = Math.min(...input.slice(1).map((x) => Number(x.split(" ")[1])));

const PACKAGE_COUNT = 6;

const solution = (N, packageMin, perMin) => {
  let total = 0;

  while (true) {
    if (N <= PACKAGE_COUNT) {
      const perPrice = perMin * N;
      total += Math.min(packageMin, perPrice);
      break;
    } else {
      const setCount = Math.floor(N / 6);
      const packageSet = packageMin * setCount;
      const perSet = perMin * PACKAGE_COUNT * setCount;
      total += Math.min(packageSet, perSet);
      N -= PACKAGE_COUNT * setCount;
    }
  }
  console.log(total);
};

solution(N, packageMin, perMin);

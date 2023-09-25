let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, f] = input;

const solution = (n, f, answer = 0) => {
  let number = Math.floor(n / 100) * 100;

  while (true) {
    if (number % f === 0) {
      answer = number % 100;
      break;
    } else {
      number++;
    }
  }

  console.log(String(answer).padStart(2, "0"));
};

solution(n, f);

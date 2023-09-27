let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (number) => {
  let sum = 0;
  let addNum = 0;
  for (let i = 1; ; i++) {
    sum += i;
    addNum++;
    if (number < sum) {
      addNum--;
      break;
    }
  }
  console.log(addNum);
};
solution(+input);

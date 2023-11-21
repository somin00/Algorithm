const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0].split(" ")[0];
const position = input[1].split(" ");
let answer = 0;

const numbers = Array.from({ length: Number(N) }, (value, index) => index + 1);

for (let i = 0; i < position.length; i++) {
  let target = +position[i];

  if (target === numbers[0]) {
    cal1();
  } else {
    let middle = numbers.length / 2;
    let index = numbers.indexOf(target);
    let isLeft = index < middle;

    if (isLeft) {
      for (let j = 0; j < index; j++) {
        cal2();
      }
    } else {
      for (let j = 0; j < numbers.length - index; j++) {
        cal3();
      }
    }
    cal1();
  }
}

console.log(answer);

function cal1() {
  numbers.shift();
}

function cal2() {
  const first = numbers.shift();
  numbers.push(first);
  answer++;
}

function cal3() {
  const last = numbers.pop();
  numbers.unshift(last);
  answer++;
}

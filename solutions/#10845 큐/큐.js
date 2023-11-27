// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const queue = [];
let answer = "";

const push = (X) => {
  queue.push(X);
};

const pop = () => {
  if (queue.length === 0) return -1;
  return queue.shift();
};

const size = () => {
  return queue.length;
};

const empty = () => {
  if (queue.length === 0) return 1;
  return 0;
};

const front = () => {
  if (queue.length === 0) return -1;
  return queue[0];
};

const back = () => {
  if (queue.length === 0) return -1;
  return queue[queue.length - 1];
};

for (let i = 0; i < N; i++) {
  const [command, number] = input[i].split(" ");
  switch (command) {
    case "push":
      push(Number(number));
      break;
    case "pop":
      answer += pop() + "\n";
      break;
    case "size":
      answer += size() + "\n";
      break;
    case "empty":
      answer += empty() + "\n";
      break;
    case "front":
      answer += front() + "\n";
      break;
    case "back":
      answer += back() + "\n";
      break;
  }
}

console.log(answer);

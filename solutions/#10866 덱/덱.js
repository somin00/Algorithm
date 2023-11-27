const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const deq = [];
let answer = "";

const push_front = (X) => {
  deq.unshift(X);
};

const push_back = (X) => {
  deq.push(X);
};

const pop_front = () => {
  if (deq.length === 0) return -1;
  return deq.shift();
};

const pop_back = () => {
  if (deq.length === 0) return -1;
  return deq.pop();
};

const size = () => {
  return deq.length;
};

const empty = () => {
  if (deq.length === 0) return 1;
  return 0;
};

const front = () => {
  if (deq.length === 0) return -1;
  return deq[0];
};

const back = () => {
  if (deq.length === 0) return -1;
  return deq[deq.length - 1];
};

for (let i = 0; i < N; i++) {
  const [command, number] = input[i].split(" ");
  switch (command) {
    case "push_front":
      push_front(Number(number));
      break;
    case "push_back":
      push_back(Number(number));
      break;
    case "pop_front":
      answer += pop_front() + "\n";
      break;
    case "pop_back":
      answer += pop_back() + "\n";
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

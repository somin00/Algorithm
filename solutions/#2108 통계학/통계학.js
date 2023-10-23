const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const numbers = input.slice(1).map(Number);

const avg = () => {
  const sum = numbers.reduce((acc, cnt) => acc + cnt);
  const result = Math.round(sum / N);
  if (result === -0) return 0;
  return result;
};

const middle = () => {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted[Math.floor(N / 2)];
};

const mode = () => {
  const obj = {};
  for (let i = 0; i < numbers.length; i++) {
    obj[numbers[i]] = (obj[numbers[i]] || 0) + 1;
  }

  const mostValue = Math.max(...Object.values(obj));

  const mostArr = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === mostValue) mostArr.push(+key);
  }

  if (mostArr.length === 1) {
    return mostArr[0];
  } else {
    const sorted = mostArr.sort((a, b) => a - b);
    return sorted[1];
  }
};

const range = () => {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return max - min;
};

let result = "";
result += avg() + "\n";
result += middle() + "\n";
result += mode() + "\n";
result += range() + "\n";

console.log(result);

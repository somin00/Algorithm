const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();
const stack = [];
function checkPair(bracket) {
  const couple = bracket === ")" ? "(" : "[";
  const prev = stack.pop();
  if (prev === couple) {
    stack.push(couple === "(" ? 2 : 3);
    return true;
  }
  if (typeof prev === "number") {
    let cnt = prev;
    let stackLength = stack.length;
    while (stackLength--) {
      const cntPrev = stack.pop();
      if (cntPrev === couple) {
        stack.push(cnt * (couple === "(" ? 2 : 3));
        return true;
      } else if (typeof cntPrev === "number") {
        cnt += cntPrev;
        continue;
      } else {
        return false;
      }
    }
  }
  return false;
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" || input[i] === "[") stack.push(input[i]);
  else {
    if (!checkPair(input[i])) {
      console.log(0);
      return;
    }
  }
}

const hasBracket = stack.some((elem) => typeof elem === "string");
if (hasBracket) console.log("0");
else {
  const answer = stack.reduce((a, c) => a + c, 0);
  console.log(answer);
}

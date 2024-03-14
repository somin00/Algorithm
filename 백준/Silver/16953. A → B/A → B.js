let [A, B] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 1;
let isSame = false;

while (A <= B) {
  if (A === B) {
    isSame = true;
    break;
  }

  if (B % 2 === 0) B = parseInt(B / 2);
  else if (B % 10 === 1) B = parseInt(B / 10);
  else break;
  count++;
}

if (isSame) console.log(count);
else console.log(-1);

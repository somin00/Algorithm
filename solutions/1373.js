const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const solution = () => {
  let numStr = input[0];
  let answer = "";
  while (numStr.length >= 3) {
    answer = parseInt(numStr.slice(numStr.length - 3), 2).toString(8) + answer;
    numStr = numStr.slice(0, numStr.length - 3);
  }
  console.log((numStr ? parseInt(numStr, 2).toString(8) : "") + answer);
};

solution();

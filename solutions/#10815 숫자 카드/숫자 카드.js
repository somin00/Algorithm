const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const haveCard = input[1].split(" ");
const compareCard = input[3].split(" ");

const solution = (haveCard, compareCard) => {
  let result = "";
  const haveSet = new Set();
  for (let i = 0; i < haveCard.length; i++) {
    haveSet.add(haveCard[i]);
  }

  for (let i = 0; i < compareCard.length; i++) {
    haveSet.has(compareCard[i]) ? (result += "1 ") : (result += "0 ");
  }
  console.log(result);
};

solution(haveCard, compareCard);

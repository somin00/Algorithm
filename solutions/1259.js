const numberArr = require("fs").readFileSync("example.txt").toString().trim().split("\n");

for (let i = 0; i < numberArr.length; i++) {
  const number = numberArr[i];

  if (number === "0") break;

  const reverseNumber = number.split("").reverse().join("");

  let isPalindrome = number === reverseNumber ? true : false;

  isPalindrome ? console.log("yes") : console.log("no");
}

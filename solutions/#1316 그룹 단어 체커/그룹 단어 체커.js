const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const isGroupWord = (str) => {
  let isGroup = true;
  if (str.length === 1) return isGroup;

  const eachWord = {};

  for (let i = 0; i < str.length; i++) {
    const prev = eachWord[str[i]];
    if (typeof prev !== "undefined" && i - prev !== 1) {
      isGroup = false;
      break;
    } else {
      eachWord[str[i]] = i;
    }
  }
  return isGroup;
};

const solution = (arr, result = 0) => {
  const wordCount = arr[0];

  for (let i = 1; i <= wordCount; i++) {
    if (isGroupWord(arr[i])) result += 1;
  }

  console.log(result);
};

solution(input);

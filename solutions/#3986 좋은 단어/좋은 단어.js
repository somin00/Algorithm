const [, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (words) => {
  let answer = 0;
  for (let i = 0; i < words.length; i++) {
    const pair = [];
    for (let j = 0; j < words[i].length; j++) {
      const lastElem = pair.at(-1);
      if (lastElem === words[i][j]) pair.pop();
      else pair.push(words[i][j]);
    }
    if (pair.length === 0) answer++;
  }
  console.log(answer);
};

solution(input);

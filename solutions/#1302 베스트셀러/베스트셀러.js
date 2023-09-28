const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const nameList = input.slice(1);
  const nameObj = {};
  const best = [];

  for (let i = 0; i < nameList.length; i++) {
    const name = nameList[i];
    nameObj[name] = (nameObj[name] || 0) + 1;
  }

  const max = Math.max(...Object.values(nameObj));

  for (const key of Object.keys(nameObj)) {
    if (nameObj[key] === max) best.push(key);
  }

  if (best.length === 1) console.log(best[0]);
  else {
    console.log(best.sort()[0]);
  }
};

solution(input);

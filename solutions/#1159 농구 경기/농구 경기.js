let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const solution = (n, names, firstName = {}, answer = []) => {
  if (n < 5) {
    console.log("PREDAJA");
    return;
  }

  for (let i = 0; i < names.length; i++) {
    const first = names[i][0];
    firstName[first] = (firstName[first] || 0) + 1;
  }

  for (const [key, value] of Object.entries(firstName)) {
    if (value >= 5) answer.push(key);
  }

  answer.length === 0 ? console.log("PREDAJA") : console.log(answer.sort().join(""));
};

solution(input[0], input.slice(1));

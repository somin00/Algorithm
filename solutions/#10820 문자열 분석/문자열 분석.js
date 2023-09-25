let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const solution = (str) => {
  if (str.trim().length === 0) return;
  const lowerResult = str.match(/[a-z]/g)?.length || 0;
  const upperResult = str.match(/[A-Z]/g)?.length || 0;
  const numberResult = str.match(/[0-9]/g)?.length || 0;
  const spaceResult = str.match(/[ ]/g)?.length || 0;
  console.log(lowerResult, upperResult, numberResult, spaceResult);
};

input.map((str) => solution(str));

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const strArr = input.slice(1);

const recursion = (s, l, r, call) => {
  call++;
  if (l >= r) return [1, call];
  else if (s[l] != s[r]) return [0, call];
  else return recursion(s, l + 1, r - 1, call);
};

const isPalindrome = (s) => {
  return recursion(s, 0, s.length - 1, 0);
};

const solution = (strArr) => {
  let answer = "";
  for (let i = 0; i < strArr.length; i++) {
    const [isPalindromeResult, recursionCall] = isPalindrome(strArr[i]);
    answer += isPalindromeResult + " " + recursionCall + "\n";
  }

  console.log(answer);
};

solution(strArr);

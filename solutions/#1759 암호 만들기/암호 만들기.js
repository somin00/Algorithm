const [[L, C], strArr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

const vowels = ["a", "e", "i", "o", "u"];
const countLetter = (arr) => {
  let vowelCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) vowelCount++;
  }

  let consonantCount = arr.length - vowelCount;
  return vowelCount >= 1 && consonantCount >= 2 ? true : false;
};

function solution(L, letters) {
  const seq = new Array(+L).fill(0);
  const visited = new Array(letters.length).fill(false);
  let result = "";

  dfs(0, 0);

  function dfs(n, s) {
    if (n === +L) {
      if (seq.join("") !== seq.sort().join("")) return;
      if (countLetter(seq)) result += seq.join("") + "\n";
      return;
    }
    for (let i = s; i < letters.length; i++) {
      if (!visited[i]) {
        seq[n] = letters[i];
        visited[i] = true;
        dfs(n + 1, i + 1);
        visited[i] = false;
      }
    }
  }

  return result;
}

console.log(solution(L, strArr.sort()));

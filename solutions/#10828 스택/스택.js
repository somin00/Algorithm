const [N, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
const arr = [];

for (let i = 0; i < N; i++) {
  const [command, num] = input[i].split(" ");
  switch (command) {
    case "push":
      arr.push(num);
      break;
    case "pop":
      const last = arr.pop();
      if (last) result += last + "\n";
      else result += "-1\n";
      break;
    case "size":
      result += arr.length + "\n";
      break;
    case "empty":
      if (arr.length === 0) result += "1\n";
      else result += "0\n";
      break;
    case "top":
      const top = arr[arr.length - 1];
      if (top) result += top + "\n";
      else result += "-1\n";
      break;
  }
}

console.log(result);

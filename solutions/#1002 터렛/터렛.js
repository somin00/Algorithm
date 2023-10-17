const [T, ...cases] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";

const checkContact = (points) => {
  const [x1, y1, r1, x2, y2, r2] = points.split(" ").map(Number);
  const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  if (distance === 0 && r1 === r2) return -1;
  else if (distance > r1 + r2 || distance < Math.abs(r1 - r2)) return 0;
  else if (distance === r1 + r2 || distance === Math.abs(r1 - r2)) return 1;
  else if (distance < r1 + r2) return 2;
};

for (let i = 0; i < T; i++) {
  result += checkContact(cases[i]) + "\n";
}

console.log(result);

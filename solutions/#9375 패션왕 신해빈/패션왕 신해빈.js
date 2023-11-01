const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const cases = input.slice(1);

for (let i = 0; i < cases.length; i++) {
  const target = Number(cases[i]);
  if (!isNaN(target)) {
    const idx = i + 1;
    const testCases = cases.slice(idx, idx + target);
    const clothes = {};
    for (let j = 0; j < testCases.length; j++) {
      const [cloth, kind] = testCases[j].split(" ");
      clothes[kind] = (clothes[kind] || 0) + 1;
    }

    let result = 1;
    for (const key of Object.keys(clothes)) {
      result *= clothes[key] + 1;
    }

    console.log(result - 1);
  }
}

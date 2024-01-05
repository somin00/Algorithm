const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const graph = input.map((item) => item.split(" ").map((item) => Number(item)));
const visit = Array.from({ length: n }, () => 0);
let answer = Number.MAX_SAFE_INTEGER;

function dfs(l, k) {
  if (l === n / 2) {
    const startTeam = [];
    const linkTeam = [];
    let startSum = 0;
    let linkSum = 0;
    for (let i = 0; i < n; i++) {
      if (visit[i]) startTeam.push(i);
      else linkTeam.push(i);
    }

    for (let i = 0; i < n / 2; i++) {
      for (let j = i + 1; j < n / 2; j++) {
        startSum += graph[startTeam[i]][startTeam[j]] + graph[startTeam[j]][startTeam[i]];
        linkSum += graph[linkTeam[i]][linkTeam[j]] + graph[linkTeam[j]][linkTeam[i]];
      }
    }
    answer = Math.min(answer, Math.abs(startSum - linkSum));
    return;
  }

  for (let i = k; i < n; i++) {
    visit[i] = 1;
    dfs(l + 1, i + 1);
    visit[i] = 0;
  }
}

dfs(0, 0);

console.log(answer);

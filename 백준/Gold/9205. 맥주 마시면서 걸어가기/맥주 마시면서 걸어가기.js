const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let t = +input[0];
let i = 1;
while (t-- > 0) {
  const n = +input[i++];
  const start = input[i].split(" ").map(Number);
  const market = [];
  for (let j = 1; j <= n; j++) {
    market.push(input[i + j].split(" ").map(Number));
  }
  i += n + 1;
  const end = input[i].split(" ").map(Number);
  i += 1;

  const visited = Array.from({ length: n }).fill(false);
  bfs(...start);
  function bfs(x, y) {
    const queue = [[start[0], start[1]]];
    while (queue.length) {
      const [cntx, cnty] = queue.shift();
      if (Math.abs(cntx - end[0]) + Math.abs(cnty - end[1]) <= 1000) {
        console.log("happy");
        return;
      }

      for (let k = 0; k < n; k++) {
        if (!visited[k]) {
          if (Math.abs(cntx - market[k][0]) + Math.abs(cnty - market[k][1]) <= 1000) {
            visited[k] = true;
            queue.push([market[k][0], market[k][1]]);
          }
        }
      }
    }
    console.log("sad");
    return;
  }
}

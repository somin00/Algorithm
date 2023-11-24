const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");
const [F, S, G, U, D] = input.map(Number);

if (S === G) {
  console.log("0");
  return;
}

const dir = [U, -D];

const visited = Array.from({ length: F + 1 }, () => 0);

function isValid(stair) {
  return 1 <= stair && stair <= F;
}

function bfs(S) {
  const queue = [[S, 1]];

  while (queue.length !== 0) {
    const [current, clickCount] = queue.shift();
    if (current === G) return clickCount;
    visited[current] = clickCount;
    for (let i = 0; i < 2; i++) {
      const moveStair = current + dir[i];

      if (isValid(moveStair)) {
        if (!visited[moveStair]) {
          queue.push([moveStair, clickCount + 1]);
          visited[moveStair] = clickCount + 1;
        }
      }
    }
  }
}
bfs(S);

let answer = visited[G];

if (visited[G] === 0) {
  console.log("use the stairs");
} else {
  console.log(visited[G] - 1);
}

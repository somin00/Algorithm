const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString();

const visit = Array.from({ length: 1001 }, () => Array(1001).fill(0));

function bfs() {
  const queue = [[1, 0, 0]];
  visit[1][0] = 1;

  while (queue.length) {
    const [count, clip, time] = queue.shift();

    if (count === input) return time;

    if (count <= 0 || count > 1000) continue;

    if (!visit[count][count]) {
      visit[count][count] = 1;
      queue.push([count, count, time + 1]);
    }

    if (clip && count + clip <= 1000) {
      if (!visit[count + clip][clip]) {
        visit[count + clip][clip] = 1;
        queue.push([count + clip, clip, time + 1]);
      }
    }

    if (!visit[count - 1][clip]) {
      visit[count - 1][clip] = 1;
      queue.push([count - 1, clip, time + 1]);
    }
  }
}

const time = bfs();
console.log(time);

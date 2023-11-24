const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ");

const [N, K] = input.map(Number);

const visited = Array.from({ length: 100001 }, () => 0);

const moveCase = [-1, 1, 2];

function isValid(x) {
  return 0 <= x && x <= 100001;
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    let removeNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    removeNode.next = null;
    this.size--;
    return removeNode.val;
  }
}

let q = new Queue();

function bfs(start) {
  q.enqueue([start, 0]);
  while (q.size !== 0) {
    const [current, time] = q.dequeue();
    if (current === K) return time;

    for (let i = 0; i < moveCase.length; i++) {
      let movedPosition = 0;
      if (moveCase[i] === 2) movedPosition = moveCase[i] * current;
      else movedPosition = moveCase[i] + current;

      if (isValid(movedPosition) && !visited[movedPosition]) {
        visited[movedPosition] = time + 1;
        q.enqueue([movedPosition, time + 1]);
      }
    }
  }
}

bfs(N);

console.log(visited[K]);

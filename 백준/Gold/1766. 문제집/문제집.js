let [input, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(data) {
    this.heap.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.heap.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while (this.heap[parentIdx] && this.heap[childIdx] < this.heap[parentIdx]) {
      this.swap(childIdx, parentIdx);
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[index]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[index])
    ) {
      let smaller = leftIdx;

      if (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[smaller]) {
        smaller = rightIdx;
      }

      this.swap(index, smaller);
      index = smaller;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }

    return value;
  }
}

const [n, m] = input.split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const dist = Array.from({ length: n + 1 }, () => 0);

for (let i = 0; i < arr.length; i++) {
  const [prev, next] = arr[i].split(" ").map(Number);
  graph[prev].push(next);
  dist[next] += 1;
}

const queue = new MinHeap();
for (let i = 1; i <= n; i++) {
  if (dist[i] === 0) queue.add(i);
}

const answer = [];

while (queue.heap.length) {
  const problem = queue.remove();
  answer.push(problem);

  graph[problem].forEach((elem) => {
    dist[elem] -= 1;
    if (!dist[elem]) queue.add(elem);
  });
}

console.log(answer.join(" "));

const [input, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, x] = input.split(" ").map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(data) {
    this.heap.push(data);
    if (this.heap.length !== 1) {
      let index = this.heap.length - 1;
      let parentIdx = Math.floor((index - 1) / 2);

      while (this.heap[parentIdx] && this.heap[index][1] < this.heap[parentIdx][1]) {
        this.swap(index, parentIdx);
        index = parentIdx;
        parentIdx = Math.floor((index - 1) / 2);
      }
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;
    let leftChildIdx = index * 2 + 1;
    let rightChildIdx = index * 2 + 2;

    while (
      (this.heap[leftChildIdx] && this.heap[leftChildIdx][1] < this.heap[index][1]) ||
      (this.heap[rightChildIdx] && this.heap[rightChildIdx][1] < this.heap[index][1])
    ) {
      let smallerIdx = leftChildIdx;

      if (this.heap[rightChildIdx] && this.heap[rightChildIdx][1] < this.heap[smallerIdx][1]) {
        smallerIdx = rightChildIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftChildIdx = index * 2 + 1;
      rightChildIdx = index * 2 + 2;
    }

    return value;
  }
}

const graph = Array.from({ length: n + 1 }, () => []);
const backGraph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < arr.length; i++) {
  const [from, to, cost] = arr[i].split(" ").map(Number);
  graph[from].push([to, cost]);
  backGraph[to].push([from, cost]);
}

function dijkstra(graph) {
  const queue = new MinHeap();
  const dist = Array.from({ length: n + 1 }, () => Infinity);
  queue.add([x, 0]);
  dist[x] = 0;

  while (queue.heap.length) {
    const [from, cost] = queue.remove();

    for (const newInfo of graph[from]) {
      const newTo = newInfo[0];
      const newCost = newInfo[1] + cost;
      if (dist[newTo] < newCost) continue;

      queue.add([newTo, newCost]);
      dist[newTo] = newCost;
    }
  }

  return dist;
}

const goDist = dijkstra(graph);
const backDist = dijkstra(backGraph);

let max = 0;
for (let i = 1; i < n + 1; i++) {
  max = Math.max(goDist[i] + backDist[i], max);
}

console.log(max);

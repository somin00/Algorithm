const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const m = +input.shift();
const [start, end] = input[m].split(" ").map(Number);

class Heap {
  constructor() {
    this.items = [];
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  findParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  findLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  findRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  findParent(idx) {
    return this.items[this.findParentIdx(idx)];
  }

  findLeftChild(idx) {
    return this.items[this.findLeftChildIdx(idx)];
  }

  findRightChild(idx) {
    return this.items[this.findRightChildIdx(idx)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (this.findParent(index) && this.findParent(index) > this.items[index][1]) {
      this.swap(index, this.findParentIdx(index));
      index = this.findParentIdx(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      (this.findLeftChild(index) && this.findLeftChild(index)[1] < this.items[index][1]) ||
      (this.findRightChild(index) && this.findRightChild(index)[1] < this.items[index][1])
    ) {
      let smallIndex = this.findLeftChildIdx(index);

      if (this.findRightChild(index) && this.findRightChild(index)[1] < this.items[smallIndex][1]) {
        smallIndex = this.findRightChildIdx(index);
      }
      this.swap(index, smallIndex);
      index = smallIndex;
    }
  }

  add(value) {
    this.items.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.items.length === 1) {
      return this.items.pop();
    }
    const value = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return value;
  }
}

function dijkstra() {
  const heap = new MinHeap();
  const dist = Array(n + 1).fill(Infinity);
  const graph = Array.from({ length: n + 1 }, () => new Object());

  heap.add({ node: start, cost: 0 });
  dist[start] = 0;

  for (let i = 0; i < m; i++) {
    const [from, to, cost] = input[i].split(" ").map(Number);
    if (graph[from][to] === undefined) {
      graph[from][to] = cost;
    } else {
      if (graph[from][to] > cost) {
        graph[from][to] = cost;
      }
    }
  }

  while (heap.size()) {
    const { node: cnt, cost: cntCost } = heap.poll();

    if (cntCost > dist[cnt]) continue;
    for (const to in graph[cnt]) {
      if (cntCost > dist[to]) continue;
      const cost = graph[cnt][to];
      const nextCost = cost + cntCost;
      if (nextCost < dist[to]) {
        dist[to] = nextCost;
        heap.add({ node: to, cost: nextCost });
      }
    }
  }

  console.log(dist[end]);
}

dijkstra();

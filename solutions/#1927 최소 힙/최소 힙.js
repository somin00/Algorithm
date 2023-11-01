const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const numbers = input.slice(1).map(Number);
let answer = "";

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    let child = this.values[childIdx];

    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent <= child) break;
      this.values[parentIdx] = child;
      this.values[childIdx] = parent;
      childIdx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  remove() {
    const min = this.values[0];
    const end = this.values.pop();
    if (typeof min === "undefined") return 0;
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min;
  }
}

const queue = new PriorityQueue();

for (let i = 0; i < N; i++) {
  if (numbers[i] === 0) answer += queue.remove() + "\n";
  else queue.insert(numbers[i]);
}

console.log(answer);

function solution(scoville, k) {
    const heap=new Heap(); 
    
    for(let i=0; i<scoville.length; i++){
        heap.insert(scoville[i])
    }
    
    let count=0; 
    
    while(heap.size()>0 && heap.min()<k){
        const min=heap.remove(); 
        const secondMin=heap.remove(); 
        heap.insert(min+secondMin*2)
        count++; 
    }
    
    return heap.min() >= k? count : -1
}

class Heap {
  constructor() {
    this.values = [];
  }
    
 min(){
     return this.values[0]
 }

  size(){
    return this.values.length   
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

  remove() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
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
}

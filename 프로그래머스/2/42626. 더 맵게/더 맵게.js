function solution(scoville, K) {
    let answer = 0;
    
    const heap=new Heap(scoville); 

    heap.values.sort((a,b)=>a-b); 
    
    if(heap.values[0]>=K) return 0; 
    
    while(heap.values[0]<K && heap.values.length>1){
        const first=heap.dequeue(); 
        const second=heap.dequeue(); 
        const newScoville=first+2*second; 
        heap.enqueue(newScoville); 
        answer++; 
    }
    
    if(heap.values[0]<K) return -1; 
    return answer; 
}

class Heap{
    constructor(scoville){
        this.values=scoville; 
    }   
    
    enqueue(val){
        this.values.push(val); 
        this.bubbleUp(); 
    }
    
     bubbleUp(){
        let childIdx=this.values.length-1; 
        let child=this.values[childIdx]; 
        while(childIdx>0){
            let parentIdx=Math.floor((childIdx-1)/2); 
            let parent=this.values[parentIdx]; 
            if(parent<=child) break;
            this.values[parentIdx]=child; 
            this.values[childIdx]=parent;
            childIdx=parentIdx; 
        }
    } 
    
    dequeue(){
        const top=this.values[0]; 
        const end=this.values.pop(); 
        if(this.values.length>0){
            this.values[0]=end; 
            this.bubbleDown(); 
        }
        return top; 
    }
    
    bubbleDown(){
        let idx=0; 
        const length=this.values.length; 
        const element=this.values[0]; 
        while(true){
            let leftChildIdx=2*idx+1; 
            let rightChildIdx=2*idx+2;  

            let leftChild, rightChild; 
            let swap=null; 

            if(leftChildIdx<length){
                leftChild=this.values[leftChildIdx]; 
                if(leftChild<element) swap=leftChildIdx; 
            }
            if(rightChildIdx<length){
                rightChild=this.values[rightChildIdx]; 
                if((swap===null&& rightChild< element) ||(swap!==null && rightChild<leftChild)){
                    swap=rightChildIdx; 
                }
            }
            //자리를 바꾸지 않는 경우에 루프 종료
            if(swap===null) break;
            this.values[idx]=this.values[swap]; 
            this.values[swap]=element; 
            idx=swap; 
        }

    }
}


function solution(order) {
    let answer = 0;
    
    const stack1=Array.from({length: order.length}, (_, idx)=> idx+1); 
    const stack2=[]; 
    let start=0; 
    let orderIdx=0; 
    
    while(start<stack1.length || stack2.length){
        if(order[orderIdx]===stack1[start]) {
            answer++; 
            orderIdx++;
            start++; 
        }else if(order[orderIdx]>stack1[start]){
            stack2.push(stack1[start]); 
            start++; 
        }else{
            const last=stack2.pop(); 
            if(last!==order[orderIdx])break;
            answer++; 
            orderIdx++; 
        }
    }
    
    return answer;
}
function solution(queue1, queue2) {
    let tried=0, queueLength=queue1.length+queue2.length; 
    let idx1=0, idx2=0; 
    let isSameSum=false; 
    let sum1=queue1.reduce((a,c)=>a+c, 0); 
    let sum2=queue2.reduce((a,c)=>a+c, 0); 
    
    if((sum1+sum2)%2!==0) return -1; 
    
    while(tried<queueLength*2){
        if(sum1>sum2){
            const first=queue1[idx1++]; 
            queue2.push(first); 
            sum1-=first; 
            sum2+=first; 
        }else if(sum1<sum2){
            const first=queue2[idx2++]; 
            queue1.push(first); 
            sum1+=first; 
            sum2-=first; 
        }else{
            isSameSum=true; 
            break;
        }
        tried++; 
    }
    
    return isSameSum? tried:-1; 
    
}
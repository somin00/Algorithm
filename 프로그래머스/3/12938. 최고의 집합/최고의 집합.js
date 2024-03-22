function solution(n, s) {
    if(n>s) return [-1]; 
    
    const answer=[]
    for(let i=n; i>0; i--){
        const addNum=Math.floor(s/i); 
        s-=addNum; 
        answer.push(addNum); 
    }
    
    return answer; 
}

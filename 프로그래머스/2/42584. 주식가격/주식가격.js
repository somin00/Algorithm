function solution(prices) {
    const answer = Array.from({length: prices.length}, ()=>0); 
    const stack=[[prices[0], 0]]; 

    for(let i=1; i<prices.length; i++){
        const now=prices[i]
        if(stack.length===0 || now >=stack[stack.length-1][0]) {
            stack.push([now, i]); 
        }
        else{
            while(stack.length){
                if(stack[stack.length-1][0]<=now) break;
                const last=stack.pop(); 
                const [price, count]=last; 
                answer[count]=i-count; 
            }
            stack.push([now, i])
        }
    }

    for(let i=0; i<stack.length; i++){
        const [number, count]=stack[i]; 
        answer[count]=prices.length-1-count; 
    }
    
    return answer;
}
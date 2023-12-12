function solution(numbers) {
    const answer = Array.from({length: numbers.length}, ()=>0); 
    const stack=[[numbers[0], 0]]; 
    
    for(let i=1; i<numbers.length; i++){
        const now=numbers[i]; 
        
        if(stack.at(-1)[0]>=now) stack.push([now, i]); 
        else {
            while(stack.length){
                if(stack.at(-1)[0]>=now) break;
                const [number, count]=stack.pop(); 
                answer[count]=now; 
            }
            stack.push([now,i]); 
        }
    }
    
    for(let i=0; i<stack.length; i++){
        const [number, count]=stack[i]; 
        answer[count]=-1; 
    }
    return answer;
}
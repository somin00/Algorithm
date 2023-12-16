function solution(number, k) {
    
    const numbers=number.split("").reverse(); 
    const stack=[]; 

    while(numbers.length && k>0){
        const cnt=numbers.pop(); 
        if(stack[stack.length-1]>=cnt || !stack.length){
            stack.push(cnt); 
        }else{
            while(stack[stack.length-1] < cnt && k>0){
                stack.pop(); 
                k-=1;
            }
            stack.push(cnt)
        }
    }
    
    if(k!==0){
        for(let i=0; i<k; i++){
            stack.pop(); 
        }
    }
    
    return stack.join("")+numbers.reverse().join("")
    
}


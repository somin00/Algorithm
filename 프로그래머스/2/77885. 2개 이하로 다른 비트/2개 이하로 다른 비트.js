function solution(numbers) {
    const answer = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2===0){
            answer.push(numbers[i]+1); 
        }
        else {
         const binary=numbers[i].toString(2)   
         const lastIdx=binary.lastIndexOf("0"); 
 
            if(lastIdx===-1){
                answer.push(parseInt("10"+binary.slice(1), 2)); 
            }else{
                const value=binary.slice(0, lastIdx)+"10"+binary.slice(lastIdx+2);
                answer.push(parseInt(value, 2)); 
            }
        }
    }
    return answer;
}
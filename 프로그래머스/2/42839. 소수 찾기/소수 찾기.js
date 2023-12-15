function solution(numbers) {
    let answer=0; 
    numbers=numbers.split("").map(Number); 
    const permutationSet=new Set(); 
    for(let i=1; i<=numbers.length; i++){
        const results= getPermutations(numbers, i)
        results.forEach((value)=>permutationSet.add(Number(value.join("")))); 

    }

    const permutations=Array.from(permutationSet); 

    for(let i=0; i<permutations.length; i++){
        if(isPrime(permutations[i])) answer++; 
    }
    
    return answer; 
}


function getPermutations(arr, selectedNum){
    const results=[]; 
    if(selectedNum===1) return arr.map(item=>[item]); 
    
    arr.forEach((fixed, idx, origin)=>{
        const rest=[...origin.slice(0, idx), ...origin.slice(idx+1)]; 
        const permutations=getPermutations(rest, selectedNum-1); 
        const attached=permutations.map(item=>[fixed, ...item]); 
        results.push(...attached)
    })
    
    return results; 
}

function isPrime(number){
    if(number<=1) return false; 
    if(number===2) return true; 
    
    for(let i=2; i<=Math.floor(Math.sqrt(number)); i++){
        if(number%i===0) return false; 
    }
    return true; 
}

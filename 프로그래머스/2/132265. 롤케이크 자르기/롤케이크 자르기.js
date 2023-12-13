function solution(topping) {
    let answer = 0; 
    const bro=new Set();
    const map=new Map(); 
    
    for(let i=0; i<topping.length; i++){
        const cnt=topping[i]; 
        if(map.has(cnt)) map.set(cnt, map.get(cnt)+1); 
        else map.set(cnt, 1); 
    }
    
    for(let i=0; i<topping.length; i++){
        const count=map.get(topping[i])-1; 
        
        bro.add(topping[i]); 
        
        if(count===0) map.delete(topping[i]); 
        else map.set(topping[i], count); 
        
        if(bro.size===map.size) answer++; 
        
    }
    
    return answer;
}
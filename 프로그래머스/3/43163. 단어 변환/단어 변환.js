function solution(begin, target, words) {
    if(!words.includes(target)) return 0; 
    
    const visited=Array.from({length: words.length}, ()=>false); 
    const queue=[[begin, 0]]
    
    let answer=0; 
    while(queue.length){
        const [start, count]=queue.shift(); 
        
        if(start===target){
            answer=count; 
            break;
        }
        
        for(let i=0; i<words.length; i++){
            if(checkDiff(start, words[i])){
                if(!visited[i]){
                    visited[i]=true; 
                    queue.push([words[i], count+1]); 
                }
            }
        }
    }
    return answer; 
}


function checkDiff(start, word){
    let count=0;
    for(let i=0; i<start.length; i++){
        if(start[i]!==word[i]) count++; 
    }
    
    return count===1? true: false; 
}
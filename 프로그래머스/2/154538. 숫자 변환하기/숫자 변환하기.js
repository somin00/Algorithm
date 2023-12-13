function solution(x, y, t) {
    if(x===y) return 0; 
    const visited=Array.from({length: y}, ()=>0); 
    const queue=[[y, 0]]; 
    visited[y]=1; 

    const calCase=[["-", t], ["/", 2], ["/", 3]]; 
    
    let start=0; 
    while(start<queue.length){
        const [cnt, count]=queue[start]; 
        for(let i=0; i<calCase.length; i++){
            const [operation, number]=calCase[i]; 
            const calced=operation==="/"? cnt/number : cnt-number; 
            
            if(calced===x) return count+1; 
            if(calced%1===0 && calced>=x){
                 queue.push([calced, count+1])
                visited[calced]=1; 
            }
        }
        start++; 
    }
    
    return -1;
    
}
function solution(N, road, K) {
    const graph=Array.from({length: N+1}, ()=>[])
    for(const [a, b, c] of road){
        graph[a].push([b, c])
        graph[b].push([a, c])
    }
    
    const dist=Array.from({length: N+1}, ()=>Infinity) 
    
    const queue=[[1, 0]]; 
    dist[1]=0; 
    
    while(queue.length){
        const [from, cost]=queue.pop(); 
        for(const newInfo of graph[from]){
            const newTo=newInfo[0]; 
            const newCost=newInfo[1]+cost; 
            
            if(newCost<dist[newTo]){
                queue.push([newTo, newCost]); 
                dist[newTo]=newCost; 
                queue.sort((a,b)=>b[1]-a[1])
            }
        }
    }
    return dist.filter(v=> v<=K).length
}
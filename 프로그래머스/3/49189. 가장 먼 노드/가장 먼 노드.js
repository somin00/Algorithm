function solution(n, edge) {
    const visited=Array.from({length: n+1}, ()=>Infinity); 
    const flag=Array.from({length: n+1}, ()=>false); 
    visited[0]=0; 
    visited[1]=0; 
    flag[1]=true; 
    
    const graph={}; 

    for(let i=0; i<edge.length; i++){
        const [a, b]=edge[i]; 

        if(graph[a]) graph[a].push(b); 
        else graph[a]=[b]; 
        
        if(graph[b]) graph[b].push(a); 
        else graph[b]=[a]; 
    }
    
    const queue=[1]; 
    
    while(queue.length){
        const start=queue.shift(); 
        const connected=graph[start]; 
        connected.forEach((elem)=>{
            if(!flag[elem]) {
                visited[elem]=visited[start]+1; 
                queue.push(elem); 
                flag[elem]=true; 
            }
        }); 
    }
    const maxDist=Math.max(...visited); 
    const answer=visited.filter(count=>count===maxDist).length; 
    return answer; 
}
function solution(n, computers) {
    let answer=0; 
    const visited=Array.from({length: n}, ()=>0); 
    for(let i=0; i<n; i++){
        if(!visited[i]){
            answer+=1; 
            dfs(computers, visited, i);    
        }
    }
    
    return answer; 
   
}
function dfs(computers, visited, node){
    visited[node]=1; 
    
    for(let i=0; i<computers[node].length; i++){
        if(computers[node][i] && !visited[i]){
            dfs(computers, visited, i); 
        }
    }
}
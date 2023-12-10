function solution(maps) {
    const n=maps.length; 
    const m=maps[0].length; 
    const visited=Array.from({length: n}, ()=>new Array(m).fill(0))
    
    let answer=Infinity; 
    const count=bfs(maps, visited, n, m); 
    
    return visited[n-1][m-1]? visited[n-1][m-1] :-1
    
}


function bfs(maps,visited,  n, m){
    
    const dx=[-1, 1, 0, 0]; 
    const dy=[0, 0, -1, 1];     
    

    const q=[[0, 0, 1]]; 
    visited[0][0]=1;
    
    let start=0; 
    while(start<q.length){
        const [x,y, count]=q[start]; 

        for(let i=0; i<4; i++){
            const nx=x+dx[i]; 
            const ny=y+dy[i];

            if(0<=nx && nx<n && 0<=ny && ny<m){
                if(maps[nx][ny]===1 && (!visited[nx][ny]||visited[nx][ny]>count+1)){
                    q.push([nx,ny, count+1]); 
                    visited[nx][ny]=count+1; 
                }
            }
        }
        start++; 
    }
}
const dx=[-1, 1, 0, 0]; 
const dy=[0, 0, -1, 1]; 

function solution(maps) {
    const answer=[]
    const row=maps.length; 
    const col=maps[0].length; 
    const visited=Array.from({length:row}, ()=>new Array(col).fill(0)); 
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(maps[i][j]!=="X" && !visited[i][j]){
                visited[i][j]=1; 
                const queue=[[i, j]]; 
                let sum=Number(maps[i][j]); 
                
                while(queue.length){
                    const [x, y]=queue.shift(); 
                    
                    for(let i=0; i<4; i++){
                        const nx=x+dx[i]; 
                        const ny=y+dy[i]; 
                        
                        if(0 <= nx && nx < row  && 0 <= ny && ny < col ){
                            if(maps[nx][ny]!=="X" && !visited[nx][ny]){
                                visited[nx][ny]=1; 
                                queue.push([nx,ny])
                                sum+=Number(maps[nx][ny]); 
                            }
                        }
                    }
                }
                answer.push(sum); 
            }
        }
    }
    
    return answer.length? answer.sort((a,b)=>a-b) : [-1]; 
}

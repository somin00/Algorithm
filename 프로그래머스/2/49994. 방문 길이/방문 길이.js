function solution(dirs) {
    let answer = 0;
    const direction={
        L: [-1, 0], 
        R: [1, 0], 
        U: [0, 1],
        D: [0, -1], 
    }
    const dx={}; 
    const dy={}; 
    
    let curX=0; 
    let curY=0; 
    
    for(let i=0; i<dirs.length; i++){
        const [nx, ny]=direction[dirs[i]]; 
        const newX=curX+nx; 
        const newY=curY+ny; 
        const posKey=`${curX+newX}${curY+newY}`
        if(-5<=newX&& newX<=5 && -5<=newY&& newY<=5){
            curX=newX; 
            curY=newY; 
            if(dirs[i]==="L" ||dirs[i]==="R") {
                if(!dx[posKey]){
                    answer++; 
                    dx[posKey]=1; 
                }
            }
             else if(dirs[i]==="U" ||dirs[i]==="D") {
                if(!dy[posKey]){
                    answer++; 
                    dy[posKey]=1; 
                }
            }
        }
    }
    return answer;
}
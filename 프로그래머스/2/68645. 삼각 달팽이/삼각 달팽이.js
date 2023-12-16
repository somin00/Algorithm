function solution(n) {
    const size=(n*(n+1))/2; 
    const answer = Array.from({length: n}, (_, idx)=>new Array(idx+1).fill(0));
    
    let count=1; 
    let x=0, y=0;
    while(count<=size){
        while(x<n &&  !answer[x][y]){
            answer[x++][y]=count++; 
        }
        x--,y++; 
        
        while(y<n && !answer[x][y]){
            answer[x][y++]=count++; 
        }
        x--, y-=2; 
        
        while(x>0 && y>0 && !answer[x][y]){
            answer[x--][y--]=count++; 
        }
        x+=2,y++; 

    }
    return answer.flat();
}


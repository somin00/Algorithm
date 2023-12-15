function solution(arr) {
    let answer=[0, 0]; 
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]===0) answer[0]++; 
            else answer[1]++; 
        }
    }
    

    function quadCompress(start, length){
        if(length===1) return; 
        const [x,y]=start; 
        
        let isAllSame=true; 
        let countOne=0; 
        let countZero=0; 
        for(let i=x; i<x+length; i++){
            for(let j=y; j<y+length; j++){
                if(arr[i][j]===1) countOne++; 
                else if(arr[i][j]===0) countZero++; 
                
                if(countOne!==0 && countZero!==0){
                    isAllSame=false; 
                    break;
                }
            }
        }
        
        if(isAllSame){
            if(countOne) answer[1]-=(countOne-1); 
            if(countZero) answer[0]-=(countZero-1); 
        }else{
            let half=length/2; 
            quadCompress([x,y], half); 
            quadCompress([x, y+half], half); 
            quadCompress([x+half, y], half); 
            quadCompress([x+half, y+half], half); 
            
        }
    }
    
    quadCompress([0, 0], arr.length); 
    
    return answer; 
}

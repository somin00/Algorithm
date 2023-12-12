function solution(land) {
    const dp=Array.from({length: land.length},()=>new Array(land[0].length).fill(0)); 
    for(let i=0; i<land[0].length; i++){
        dp[0][i]=land[0][i]; 
    }
    
    for(let i=1; i<land.length; i++){ 
        for(let j=0; j<land[0].length; j++){
            for(let k=0; k<land[0].length; k++){
                if(k!==j){
                    const max=land[i][j]+dp[i-1][k]; 
                    dp[i][j]=Math.max(dp[i][j], max); 
                }
            }
        }
    }
    
    let answer=Math.max(...dp[dp.length-1])
    return answer;
}
function solution(triangle) {
    const height=triangle.length; 
    const dp=Array.from({length: height}, (_, i)=>Array.from({length: i+1}, ()=>0))
    dp[0][0]=triangle[0][0]; 
    let max=dp[0][0]; 

    for(let i=1; i<height; i++){
        for(let j=0; j<triangle[i].length; j++){
            for(let k=1; k>=0; k--){
                if(j-k>=0 && j-k<=i-1){
                    dp[i][j]=Math.max(dp[i][j], triangle[i][j]+dp[i-1][j-k]);   
                    max=Math.max(max, dp[i][j]); 
                }
            }
        }
    }
    
    return max; 
}
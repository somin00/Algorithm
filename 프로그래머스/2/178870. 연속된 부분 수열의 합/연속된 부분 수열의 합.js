function solution(sequence, k) {
    const answer = [];
    
    let startIdx=0, endIdx=1; 
    let sum=sequence[0];
    let minDist=Infinity; 

    while(startIdx<=sequence.length-1  && endIdx<=sequence.length){
        if(sum<k){
            sum+=sequence[endIdx++]; 
        }else if(sum>k){
            sum-=sequence[startIdx++]; 
        }else if(sum===k){
            sum-=sequence[startIdx]; 
            minDist=Math.min(minDist, endIdx-startIdx-1); 
            answer.push({dist: minDist, val:[startIdx++, endIdx]});  
        }
    }
    
    if(answer.length===1) {
        const [x, y]=answer[0].val; 
        return [x, y-1]; 
    }
    
    const [x,y]= answer.filter(item=>item.dist===minDist).map(({val})=>val)[0]; 
    return [x, y-1]
}
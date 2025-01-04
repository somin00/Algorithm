function solution(s){
    let pair=0; 
    
    for(let i=0; i<s.length; i++){
        if(s[i]==="(") pair++
        else{
            pair--; 
            if(pair<0) return false; 
        }
    }
    
    return pair===0
}
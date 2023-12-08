function solution(msg) {
    const answer = [];
    const strObj=new Map(); 
    
    for(let i=0; i<26; i++){
        strObj.set(String.fromCharCode(i+65), i+1)
    }
    
    let start=0, end=1, last=27; 
    while(true){
        const str=msg.slice(start, end); 
        if(!strObj.has(str)){
            strObj.set(str, last++); 
            start=end-1; 
            const prevStr=str.slice(0, -1); 
            answer.push(strObj.get(prevStr))
        }else{
            if(end===msg.length) break;
            end++;     
        }
        
    }
    
    const lastStr=msg.slice(start, end); 
    answer.push(strObj.get(lastStr))
    return answer;
}
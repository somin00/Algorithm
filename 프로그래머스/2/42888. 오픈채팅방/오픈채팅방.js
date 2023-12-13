function solution(record) {
    const answer = [];
    
    const nickName={}; 
    
    for(let i=0; i<record.length; i++){
        const [inOut, uid, name]=record[i].split(" "); 
        if(inOut==="Enter"||inOut==="Change") nickName[uid]=name;
    }
    
    for(let i=0; i<record.length; i++){
        const [inOut, uid, name]=record[i].split(" "); 
        if(inOut==="Enter") answer.push(`${nickName[uid]}님이 들어왔습니다.`)
        else if(inOut==="Leave") answer.push(`${nickName[uid]}님이 나갔습니다.`)
    }
    return answer;
}
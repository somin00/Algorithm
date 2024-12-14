function solution(participant, completion) {
    const pMap=new Map(); 
    
    participant.map((name)=>pMap.set(name, (pMap.get(name)|0)+1))
    completion.map((name)=>pMap.set(name, (pMap.get(name)|0)-1))
    
    for(let [key, value] of pMap){
        if(value>0) return key
    }

}
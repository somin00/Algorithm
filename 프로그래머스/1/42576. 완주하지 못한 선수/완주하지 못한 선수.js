function solution(participant, completion) {
    participant.sort(); 
    completion.sort(); 
    
    return participant.find((item, idx)=>item!==completion[idx])
}
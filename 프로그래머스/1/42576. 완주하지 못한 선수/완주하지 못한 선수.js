function solution(participant, completion) {
    const sortedParticipant=participant.sort(); 
    const sortedCompletion=completion.sort(); 
    
    return sortedParticipant.find((item, idx)=>item!==sortedCompletion[idx])
}
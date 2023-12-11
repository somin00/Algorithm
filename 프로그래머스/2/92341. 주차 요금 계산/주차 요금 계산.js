function solution(fees, records) {
    const answer=[]; 
    const [basicTime, basicFee, unitTime, unitFee]=fees; 
    const record={}; 
    const LAST_TIME=1439; 
    
    for(let i=0; i<records.length; i++){
        const [time, number, inout]=records[i].split(" "); 
        const [hour, minute]=time.split(":").map(Number); 
        const convertTime=hour*60+minute; 
        if(inout==="IN"){
            if(record[number]) record[number].push(-convertTime); 
            else record[number]=[-convertTime]; 
        }else if(inout==="OUT"){
            const lastElem=record[number].length-1; 
            record[number][lastElem]+=convertTime; 
        }
    }
    
    for(const [key, value] of Object.entries(record)){
        let total=0; 
        for(let i=0; i<value.length; i++){
            if(value[i]<=0) total+= LAST_TIME+value[i]
            else total+=value[i]; 
        }

        if(total<basicTime) record[key]=basicFee; 
        else{
            record[key]=basicFee+Math.ceil((total-basicTime)/unitTime)*unitFee; 
        }
    }
    
    const sortedKey=Object.keys(record).sort((a,b)=>a-b); 
    
    for(let i=0; i<sortedKey.length;i++){
        answer.push(record[sortedKey[i]]);
    }
    
    return answer;
}
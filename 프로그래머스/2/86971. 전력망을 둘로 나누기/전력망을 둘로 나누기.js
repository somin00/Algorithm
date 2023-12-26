const wire={}; 
function solution(n, wires) {
    let answer=Infinity; 
    for(let i=0; i<wires.length; i++){
        const [a, b]=wires[i]; 
        if(wire[a]) wire[a].push(b);
        else wire[a]=[b]; 
        
        if(wire[b]) wire[b].push(a); 
        else wire[b]=[a]; 
    }
    
    for(let i=1; i<=n; i++){
        const candidate=wire[i]; 
        for(let j=0; j<candidate.length; j++){
            const aCount=getCount(i, candidate[j]); 
            const bCount=getCount(candidate[j], i); 
            answer=Math.min(answer, Math.abs(aCount-bCount)); 
        }
    }
    return answer; 
}

function getCount(key, opposite){
    let count=1; 
    const queue=[...wire[key]]; 
    const history=[]; 
    while(queue.length){
        const cnt=queue.shift(); 
        if(cnt!==opposite &&  cnt!==key && history.indexOf(cnt)===-1) {
            count+=1; 
            queue.push(...wire[cnt]); 
            history.push(cnt); 
        }
    }
    return count; 
}
function solution(operations) {
    const heap=[]
    for(let i=0; i<operations.length; i++){
        const [str, num]=operations[i].split(" "); 
        
        if(str==="I"){
            heap.push(Number(num))
        }else{
            let findValue=0; 
            if(num==="-1"){
                findValue=Math.min(...heap); 
            }else{
                findValue=Math.max(...heap); 
            }
            
            let findIdx=heap.indexOf(findValue); 
            
            heap.splice(findIdx, 1); 
            
        }
    }
     return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}
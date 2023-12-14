function solution(bridge_length, weight, truck_weights) {
    let sec = 0;
    let sum=0; 
    const current=[]; 
    while(truck_weights.length ||current.length){
        if(sum+truck_weights[0]<=weight && current.length<bridge_length){
            const truck=truck_weights.shift(); 
            current.push([truck, sec+bridge_length]); 
            sum+=truck; 
            sec++; 
        }else {
            const [truck, finishTime]=current.shift(); 
            if(sec<finishTime){
                sec=finishTime; 
            }
            sum-=truck; 
        }
    }

    return sec+1;
}
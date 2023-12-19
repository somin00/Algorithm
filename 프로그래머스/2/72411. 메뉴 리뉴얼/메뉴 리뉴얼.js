function solution(orders, course) {
    const answer=[]; 
    orders=orders.map(item=>item.split("").sort().join(""));
    const combArr=Array.from({length:course.length}, ()=>[])
    const combObj=Array.from({length:course.length}, ()=>({})) 
  
    for(let j=0; j<course.length; j++){
        for(let i=0; i<orders.length; i++){
            const arr=orders[i].split(""); 
            const combinations=getCombinations( arr, course[j]); 
            combArr[j].push(...combinations)
        }
    }
    for(let i=0; i<combArr.length; i++){
        for(let j=0; j<combArr[i].length; j++){
            const cnt=combArr[i][j]; 
            if(combObj[i][cnt]) combObj[i][cnt]=combObj[i][cnt]+1; 
            else combObj[i][cnt]=1; 
        }
    }

    for(let i=0; i<combObj.length; i++){
       const values= Object.values(combObj[i]); 
        const max=Math.max(...values); 
        if(max===1) continue; 
        for(const key of Object.keys(combObj[i])){
            if(combObj[i][key]===max) answer.push(key)
        }
    }
    return answer.sort();
}


function getCombinations(arr, selectedNum){
    const results=[]
    if(selectedNum===1) return arr.map(item=>[item]); 
    arr.forEach((fixed, idx, origin)=>{
        const rest=origin.slice(idx+1); 
        const combination=getCombinations( rest, selectedNum-1); 
        const attached=combination.map(item=>[fixed, ...item].join("")); 
        results.push(...attached); 
    })
    
    return results; 
}
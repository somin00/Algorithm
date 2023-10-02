const input =require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = (x,y)=>{
    const xLength=x.length; 
    const yLength=y.length; 
    const lengthDiff=yLength-xLength; 
    let min=xLength;  
    
    for(let i=0; i<=lengthDiff; i++){
        let currentMin=0; 
        for(let j=i; j<i+xLength; j++){
            if(x[j-i]!==y[j]) currentMin++; 
        }

        if(currentMin<min) min=currentMin; 
    }
    console.log(min)
};

solution(input[0], input[1])


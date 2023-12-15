function solution(m, n, board) {
    let answer=0;
    let graph=Array.from({length: n}, ()=>new Array(m).fill(0)); 
    const reversed=board.reverse().map(item=>item.split("")); 
    
    for(let i=0; i<reversed.length; i++){
        for(let j=0; j<reversed[i].length; j++){
            graph[j][i]=reversed[i][j]; 
        }
    }
    
    while(true){
        const newGraph=Array.from({length: n}, ()=>new Array(m).fill(0)); 
        for(let i=0; i<graph.length-1; i++){
            for(let j=0; j<graph[i].length-1; j++){
                const cnt=graph[i][j]
                const right=graph[i][j+1]; 
                const bottom=graph[i+1][j]; 
                const diagonal=graph[i+1][j+1]; 
                if(cnt===right && cnt===bottom&& cnt===diagonal){
                    newGraph[i][j]=1; 
                    newGraph[i][j+1]=1; 
                    newGraph[i+1][j]=1; 
                    newGraph[i+1][j+1]=1; 
                }
            }
        }
        let deleteBlock=countDelete(newGraph); 
        if(deleteBlock===0) break;
        else answer+=deleteBlock; 
        graph=makeNewGraph(graph, newGraph)
    }
    return answer;
}

function makeNewGraph(graph, newGraph){
    for(let i=0; i<graph.length; i++){
        for(let j=0; j<graph[i].length; j++){
            if(newGraph[i][j]===1) graph[i][j]=0; 
        }
    }
    
     for(let i=0; i<graph.length; i++){
         graph[i]=graph[i].join("").split(0).join("").split(""); 
    }

    return graph; 
}

function countDelete(arr){
    let count=0; 
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]===1) count++; 
        }
    }
    return count; 
}
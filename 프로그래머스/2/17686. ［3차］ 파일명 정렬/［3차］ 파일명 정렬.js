function solution(files) {
    const answer = [];
    
    for(let i=0; i<files.length; i++){
        let start=0; 
        let end=0; 
        
        for(let j=0; j<files[i].length; j++){
            if(start===0 && !isNaN(files[i][j])&& files[i][j]!==" ") {
                start=j; 
            }
            if(end!==0 && (files[i][j]===" " || isNaN(files[i][j]))) break;
            if(files[i][j]!==" "&& !isNaN(files[i][j])) end=j; 
        }
        const head=files[i].slice(0, start)
        const number=files[i].slice(start, end+1); 
        const tail=files[i].slice(end+1)
        
        files[i]=[head, number, tail]; 
    }
    
    files.sort((a,b)=>{
        if(a[0].toLowerCase()===b[0].toLowerCase()) {
            if(Number(a[1])!==Number(b[1])){
                return Number(a[1])-Number(b[1])
            }
        }else{
            if(a[0].toLowerCase()<b[0].toLowerCase()) return -1; 
            else return 1; 
        }
    })
    
    for(let i=0; i<files.length; i++){
        answer.push(files[i].join(""))
    }
    
    return answer;
}
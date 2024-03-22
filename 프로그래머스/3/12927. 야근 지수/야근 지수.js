function solution(n, works) {
    works.sort((a,b)=>b-a);
    let max=works[0]; 
    let answer=0; 
    
    while(n>0 && max>0){
        for(let i=0; i<works.length; i++){
            if(works[i]===max && n>0){
                works[i]--; 
                n--;
            }else break;
        }
        max--; 
    }
    
    for(let i=0; i<works.length; i++){
        answer+=works[i]*works[i]; 
    }

    return answer; 
}
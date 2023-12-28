function solution(p){
    return reculsive(p); 
}


function reculsive(p) {
    if(p.length===0) return ""; 
    if(checkRight(p)) return p;
    
    let [u,v]=getBalanceUV(p); 
    
    if(checkRight(u)){
        return u+reculsive(v); 
    }else{
        const vResult="("+reculsive(v)+")"; 
        let uResult=""
        for(let char of u.slice(1, -1)){
            if(char==="(") uResult+=")"; 
            else uResult+="("; 
        }
        return vResult+uResult; 
    }
    
}

function getBalanceUV(p){
    const balanceIdx=findBalance(p); 
    const u=p.slice(0, balanceIdx+1); 
    const v=p.slice(balanceIdx+1); 
    return [u, v]
}

function findBalance(p){
    let count=0; 
    for(let i=0; i<p.length; i++){
        if(p[i]==="(") count+=1; 
        else count-=1; 
        
        if(count===0) return i; 
    }
}

function checkRight(p){
    let count=0; 
    for(let i=0; i<p.length; i++){
        if(p[i]==="(") count+=1; 
        else {
            if(count===0) return false; 
            count-=1; 
        }
    }
    return count===0;
}
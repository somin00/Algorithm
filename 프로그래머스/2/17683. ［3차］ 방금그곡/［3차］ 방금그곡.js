function solution(m, musicinfos) {
    const regex=/(C|D|F|G|A)#/g; 
    m=m.replace(regex, (_, a)=>a.toLowerCase())
    
    const answer=[]; 
    
    for(let i=0; i<musicinfos.length; i++){
        let [start, end, title, music]=musicinfos[i].split(","); 
        
        let [startHour, startMin]=start.split(":"); 
        let [endHour, endMin]=end.split(":"); 
        
        startHour=parseInt(startHour);
        startMin=parseInt(startMin);
        endHour=parseInt(endHour); 
        endMin=parseInt(endMin); 
        
        music=music.replace(regex, (_, a)=>a.toLowerCase()); 
        
        let time=(endHour-startHour) * 60 + (endMin-startMin); 

        if(music.length<time){
            const sheetLength=Math.floor(time/music.length); 
            music=music.repeat(sheetLength); 
            if(time-music.length>0){
                const sheetSlice=time%music.length; 
                music+=music.slice(0, sheetSlice); 
            }
        }else if(music.length>time){
            music=music.slice(0, time); 
        }
        if(music.includes(m)) answer.push([title, time, i]); 
    }
    
    
    if(answer.length===0) return "(None)"; 
    if(answer.length===1) return answer[0][0]; 
    if(answer.length>1) {
        answer.sort((a,b)=>b[1]-a[1]||a[2]-b[2]); 
        return answer[0][0]; 
        
    }
}
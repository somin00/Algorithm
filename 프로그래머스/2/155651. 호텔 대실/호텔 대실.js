function solution(book_time) {
    const visited=Array.from({length: book_time.length}, ()=>0); 
    
    book_time=book_time.map(([checkIn, checkOut])=>{
        const [inHour, inMin]=checkIn.split(":").map(Number); 
        const [outHour, outMin]=checkOut.split(":").map(Number); 
        return [inHour*60+inMin, outHour*60+outMin+10]; 
    })
    
    book_time.sort((a,b)=>a[0]-b[0]); 
    
    const rooms=[]; 
    for(let i=0; i<book_time.length; i++){
        const [start, end]=book_time[i]; 
        
        if(Math.min(...rooms)>start){
            rooms.push(end); 
        }else{
            const minIdx=rooms.indexOf(Math.min(...rooms)); 
            rooms.splice(minIdx, 1, end); 
        }
    }
    
    return rooms.length
}
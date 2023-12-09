function solution(word) {
    let answer=0; 
     const first = {
        A : 1,
        E : 782,
        I : 1563,
        O : 2344,
        U : 3125
    }
    
    const second = {
        A: 1,
        E: 157,
        I: 313,
        O: 469,
        U: 625
    }
    
    const third = {
       A: 1,
        E: 32,
        I: 63,
        O: 94,
        U: 125
    }
    
    const fourth = {
        A: 1,
        E: 7,
        I: 13,
        O: 19,
        U: 25
    }
    
     const fifth = {
        A: 1,
        E: 2,
        I: 3,
        O: 4,
        U: 5
    }
    
     for(let i=0; i<word.length; i++){
        switch(i){
            case 0: 
                answer+=first[word[i]]; 
                break; 
            case 1:
                answer+=second[word[i]];
                break;
            case 2:
                answer+=third[word[i]];
                break;
            case 3:
                answer+=fourth[word[i]]; 
                break;
            case 4:
                answer+=fifth[word[i]];
                break;
        }
     }
    return answer
}
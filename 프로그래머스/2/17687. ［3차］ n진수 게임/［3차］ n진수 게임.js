function solution(n, t, m, p) {
    let answer = '';

    let numbers=""
    for(let i=0; i<t*m ;i++){
        const convertNum=i.toString(n).toUpperCase(); 
        numbers+=convertNum
    }   

    for(let i=p; i<=t*m; i+=m){
        answer+=numbers[i-1]

    }
    return answer;
}
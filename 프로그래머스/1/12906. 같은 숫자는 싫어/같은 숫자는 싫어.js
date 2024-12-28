function solution(arr)
{
    const answer=[]; 
    for(let i=0, j=arr.length; i<j; i++){
        if(arr[i]!==arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}
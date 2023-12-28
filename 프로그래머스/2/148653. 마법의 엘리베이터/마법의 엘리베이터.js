function solution(storey) {
    let stone=0; 
    let divNum=10; 
    while(storey>0){
        const rest=storey%divNum; 
        const isPrevBig=storey%(divNum*10)>= divNum*10/2;
        const half=divNum/2; 
        const stoneDiv=divNum/10; 
        const upFloor=divNum-rest
        if(rest>half ||(rest===half && isPrevBig )){
            storey+=upFloor; 
            stone+=upFloor/stoneDiv; 
        }else if(rest<half ||(rest===half && !isPrevBig )){
            storey-=rest; 
            stone+=rest/stoneDiv; 
        }
        divNum*=10; 
    }

    return stone; 
}

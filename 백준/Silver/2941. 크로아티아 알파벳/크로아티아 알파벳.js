const input =require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const alphabet=[
    "c=", 
    "c-", 
    "dz=", 
    "d-",
    "lj", 
    "nj", 
    "s=", 
    "z="
]
const solution = (input)=>{
    for(let item of alphabet){
        input=input.split(item).join("Q")
    }
    console.log(input.length)
};

solution(input[0])


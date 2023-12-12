function solution(skill, skill_trees) {
    let answer=0; 
    
    for(let i=0; i<skill_trees.length; i++){
        let isPossible=true; 
        let start=0; 
        for(let j=0; j<skill_trees[i].length; j++){
            if(skill_trees[i][j]===skill[start]) start++; 
            else if(skill_trees[i][j]!==skill[start]&& skill.indexOf(skill_trees[i][j])>-1) {
                isPossible=false;            
                break;
            }
        }
        if(isPossible) answer++; 
    }
    return answer;
}
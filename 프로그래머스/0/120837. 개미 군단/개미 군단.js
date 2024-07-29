function solution(hp) {
    var condition = hp;
    var answer = 0;
    if(hp > 5){        
        answer += Math.floor(hp/5)
        condition = condition - ((Math.floor(hp/5)) * 5)
    }
    if(condition >= 3){
        answer += Math.floor(condition/3)
        condition = condition - ((Math.floor(condition/3)) * 3)
    }
    if(condition < 3){
           answer += Math.floor(condition/1)
        condition = condition - (Math.floor(condition/1)) 
    }
    
    return answer;
}
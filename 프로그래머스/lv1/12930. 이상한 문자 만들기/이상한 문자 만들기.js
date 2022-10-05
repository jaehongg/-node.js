function solution(s) {
     let answer = s.split(' ');
    let sum = '';
    
    for(let i = 0; i < answer.length; i++){
        for(let j = 0; j < answer[i].length; j++){
            (j+1)%2 === 0? sum += answer[i][j].toLowerCase() : sum += answer[i][j].toUpperCase();
        }
        sum += ' ';
    }
    
    return sum.slice(0, sum.length-1);
}
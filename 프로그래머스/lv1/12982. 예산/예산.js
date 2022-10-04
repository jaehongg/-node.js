function solution(d, budget) {
    var answer = 0;
    let result = 0;
    d.sort((a,b)=> a-b);
    for(let i = 0; i < d.length; i++){
        answer += d[i];
        if(answer > budget) break;
        result++;
    }
    return result;
}
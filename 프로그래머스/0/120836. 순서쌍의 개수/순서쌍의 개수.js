function solution(n) {
    var answer = 0;
    var maxLength = Math.sqrt(n)
    
    for(var i = 1; i<=maxLength; i++)
        for (var j = n; j>0; j--)
            if(j * i === n) 
                answer++
    return Number.isInteger(maxLength) ? answer= answer * 2 -1 : answer *=2;
}
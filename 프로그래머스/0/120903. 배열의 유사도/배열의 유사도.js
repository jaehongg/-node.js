function solution(s1, s2) {
    var answer = 0;
    s1.forEach(x => s2.includes(x) ? answer++ : false)
    return answer;
}
function solution(s1, s2) {
    var answer = 0;
    s1.forEach(x => s2.includes(x) ? answer += 1 : false)
    return answer;
}
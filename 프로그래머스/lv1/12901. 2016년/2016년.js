function solution(a, b) {
    var answer = new Date(2016, a-1,b).toString();
    return answer.slice(0,3).toUpperCase();
}
// new Date
function solution(n) {
    var answer = n.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0)
    return answer;
}
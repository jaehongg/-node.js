function solution(num_list) {
    var answer = []
    
    num_list.map(x => answer.unshift(x));
    
    return answer;
}
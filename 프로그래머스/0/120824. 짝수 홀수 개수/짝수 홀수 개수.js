function solution(num_list) {
    var answer = [];
    const even = num_list.filter(num => num % 2 === 0).length
    const odd = num_list.filter(num => num % 2 === 1).length
    answer.push(even)
    answer.push(odd)
    return answer;
}
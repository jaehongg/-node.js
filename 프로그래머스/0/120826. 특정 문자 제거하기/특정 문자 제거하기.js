function solution(my_string, letter) {
    const answer = my_string.replace(new RegExp(letter, 'g'), '');
    
    return answer;
}
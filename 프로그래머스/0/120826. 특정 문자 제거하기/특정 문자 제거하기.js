function solution(my_string, letter) {
    const answer = my_string.replace(new RegExp(letter, 'g'), '');
    console.log(my_string.split(letter).join(''))
    
    return answer;
}
// function solution(n, arr1, arr2) {
//     var answer = [];
//     for(let i = 0; i < n; i++){
//         answer.push(arr1[i] | arr2[i])
//     console.log(arr1[i].toString(2))
//     }
    
//     answer = answer.map(n => n.toString(2).replaceAll(/1|0/g, a => +a ? '#' : ' '))
 
//     return answer;
// }
// 비트연산자 or

function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
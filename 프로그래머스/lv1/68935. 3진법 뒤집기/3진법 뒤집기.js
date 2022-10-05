function solution(n) {
    return parseInt(n.toString(3).split('').reverse().reduce((fir,sec) => fir+sec), 3);
}
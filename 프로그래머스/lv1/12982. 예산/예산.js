function solution(d, budget) {
    return ~ ( ~ d.sort((a,b)=>a - b).map(v => budget -= v).findIndex(v => v < 0) || ~ d.length);
}
// ~ (bitwise not) => -(n + 1)

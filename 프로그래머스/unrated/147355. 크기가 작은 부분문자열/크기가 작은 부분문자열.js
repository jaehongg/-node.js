// function solution(t, p) {
//     var answer = 0;
//     let a = 0;
//     for(let i = 0; i < t.length; i++){
//         a = t.slice(i,i+2)
//     }
//     console.log(a)
//     for(let k = 0; k < .length; k++){
//         if(a <= p){
//             answer++
//         }
//     }
//     return answer;
// }
function solution(t, p) {
    var answer = 0;
    
    for(let i=0; i<t.length; i++) {
        const str = t.slice(i, p.length+i)
        console.log(str)
        
        if(str <= p && str.length === p.length) {
            answer++
        }
    }
    
    return answer;
}
function solution(arr)
{
    var answer = [];

    for(let i=0; i<arr.length; i++){
        if(arr[i-1]!==arr[i]){
            answer.push(arr[i])
        }}   
    
    return answer;
}
/*
 const stack = [];
    const queue = [...arr];
    for (const q of queue) {
        stack[stack.length-1] !== q && stack.push(q);
    }
    return stack;
*/
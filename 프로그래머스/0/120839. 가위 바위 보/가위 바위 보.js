function solution(rsp) {
    let result = []
    let item = rsp.split('')
    
    for(let i = 0; i < item.length; i++){
        if(item[i] === '2')
            result.push('0')
        if(item[i] === '0')
            result.push('5')
        if(item[i] === '5')
            result.push('2')
    }
    console.log(result.join(''))
    return result.join('')
}
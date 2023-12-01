function solution(my_string) {
    const splited = my_string.split('')
    const reserved = splited.reverse()
    const result = reserved.join('')
    
    return result
}
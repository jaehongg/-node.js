function solution(my_string) {
    const regex = /[^0-9]/g;
    const result = my_string.replace(regex, "");
    
    return result.split('').reduce((acc,cur)=> Number(acc) + Number(cur))
   
}
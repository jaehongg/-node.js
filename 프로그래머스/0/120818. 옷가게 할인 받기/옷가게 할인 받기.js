function solution(price) {
    let discount = 0;
    
    if(500000 <= price ) {
      discount = 0.2
    } 
    else if(300000 <= price ) {
        discount = 0.1
    }
    else if(100000 <= price) {
        discount = 0.05
    }
    
    const result = price * (1 - discount)
    return Math.floor(result)
}
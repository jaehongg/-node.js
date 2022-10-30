function solution(sizes) {
    
    let x = 0;
    let y = 0;
    
    for(let i = 0; i < sizes.length; i++){
        let [inX, inY] = sizes[i].sort((a,b)=>b-a)
        
        if(x < inX){
            x = inX
        }
        if(y < inY){
            y = inY
        }
    }
    return x*y
}
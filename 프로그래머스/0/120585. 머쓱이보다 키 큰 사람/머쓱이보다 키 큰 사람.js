function solution(array, height) {
    let number = 0;
    
    array.forEach(x =>  {if(x > height) number++});
  
   return number;
    
    // array.filter(x => x > height).length
}
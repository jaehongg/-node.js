function solution(people, limit) {
    let count = 0;
    let sortArr = people.sort((a,b)=> a-b);
    let leftIdx = 0;
    let rightIdx = sortArr.length - 1;
    
    while(leftIdx < rightIdx){
        if(sortArr[leftIdx] + sortArr[rightIdx] <= limit){
            leftIdx++;
            rightIdx--;
            count++;
        }
        else{
            rightIdx--;
        }
    }
    return people.length - count;
}
function solution(nums) {
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        if(!answer.includes(nums[i])){
            answer.push(nums[i])
        }
    }
    return answer.length <= nums.length/2 ? answer.length : nums.length/2;
}
// 중복제거
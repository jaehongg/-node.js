function solution(clothes) {
    var answer = [];
    // 옷의 종류 answer에 추가
    for(let k = 0; k < clothes.length; k++){
        if(!answer.includes(clothes[k][1])){
            answer.push(clothes[k][1])
        }
    }
    // count에 종류가 같다면 +1
    const count = new Array(answer.length).fill(0)
    // clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
    // answer = ["headgear","eyewear"]
    for(let i = 0; i < answer.length; i++){
        for(let j = 0; j < clothes.length; j++){    
          if(answer[i] === clothes[j][1]){
                count[i] += 1
            }
        }
    }
    const result = count.reduce((acc,cur)=> acc * (cur+1),1) -1
    return result;
}
// clothes[i][2] 가 같을 때 => 조합x
/* 
1종류 옷 => a가지 경우의 수
2종류 옷 => a,b => (a+b)+(ab)
3종류 옷 => a,b,c => (a+b+c)+(ab+bc+ca)+(abc)
(x+a)(x+b)(x+c) = x^3 + x^2(a+b+c) + x(ab+bc+ca) + (abc)
*/
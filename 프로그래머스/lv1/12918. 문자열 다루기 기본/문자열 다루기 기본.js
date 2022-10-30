function solution(s) {
    var answer = true;
    if(s.length === 4 || s.length === 6 ){
       return s.split("").every(el => !isNaN(el))
    } else {
        return false;
    }
}

// every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.
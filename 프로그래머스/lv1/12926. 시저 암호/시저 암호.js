function solution(s, n) {
    return ([...s].map((x)=>{
        let charCode = x.charCodeAt()
        if(x ==' ')return x
        if(91>charCode){ // 소문자 영역
            return charCode+n>90?String.fromCharCode(charCode+n-26) : String.fromCharCode(charCode+n)
        }else if(charCode>96){ // 대문자 영역
            return charCode+n>122?String.fromCharCode(charCode+n-26) : String.fromCharCode(charCode+n)
        }
    }).join(''))
}
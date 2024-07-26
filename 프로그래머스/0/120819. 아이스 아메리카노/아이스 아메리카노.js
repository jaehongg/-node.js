function solution(money) {
    var drink = 5500
    var quantity = Math.floor(money/drink)
   
    return  [quantity, money - (drink * quantity)]
}
function calculateDogAge(dogAge) {
    return dogAge * 7;
}
const myDogAge = calculateDogAge(10);

console.log(myDogAge);
alert ("Your doggie is " + myDogAge + " years old in dog years!")


function moneyToSpendInCoffeeUntil80(myAge, coffeePrice) {
    return (80-myAge) * 365 * coffeePrice;
}
let moneyToSpend = moneyToSpendInCoffeeUntil80(31, 25);

console.log(moneyToSpend);

function orderFood(restaurant, food, amount){
    let orderDetails = 'You are ordering ${amount} ${food} from ${restaurant}';
    return orderDetails;
}

console.log(orderFood("Burger King", "Whopper", 3));
console.log(orderFood("Frankies", "Bianco Pizza", 2));
console.log(orderFood("Makoto", "Maki Gourmet Mix", 1));
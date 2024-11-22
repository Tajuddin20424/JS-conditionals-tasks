// const money = 600;
// if (money > 500){
//     console.log('Burger more then 500 tk')
// }
// else{
//     if(money > 30){
//         console.log('Free coke')
//     }
// }



function getCokePrice(burgerPrice){
    let cokePrice;
    if (burgerPrice > 500){
        cokePrice = "Free Coke";
    }
    else {
        cokePrice = "Coke: 30tk";
    }
    return cokePrice;
}
let burgerPrice = 550;
console.log(getCokePrice(burgerPrice));
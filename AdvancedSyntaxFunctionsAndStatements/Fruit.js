function calculateMoney(fruit, weight, pricePerKilogram){
    let moneyNeeded = (weight/1000) * pricePerKilogram;
    moneyNeeded = moneyNeeded.toFixed(2);
    weight = (weight/1000).toFixed(2);
    console.log(`I need $${moneyNeeded} to buy ${weight} kilograms ${fruit}.`);
}

calculateMoney('apple', 1563, 2.35);
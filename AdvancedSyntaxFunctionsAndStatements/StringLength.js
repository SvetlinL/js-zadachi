function stringCalculate(stringOne, stringTwo, stringThree){
    let sum = stringOne.length + stringTwo.length + stringThree.length;
    console.log(sum);
    console.log(Math.floor(sum / 3));
}

stringCalculate('chocolate', 'ice cream', 'cake');
stringCalculate('pasta', '5', '22.3');
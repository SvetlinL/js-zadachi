function circleArea(argument) {
    let inputType = typeof(argument);
    if (inputType === 'number') {
        let result = (argument ** 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argument}`);
    }
}


circleArea(5);
circleArea('name');
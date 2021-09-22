function sortNumbers(numbers) {
    let resultArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.length > 0) {
            var min = Math.min(...numbers);
            resultArr.push(min);
            numbers.splice(numbers.indexOf(min), 1);
        }
        if (numbers.length > 0) {
            var max = Math.max(...numbers);
            resultArr.push(max);
            numbers.splice(numbers.indexOf(max), 1);
        }

        i--;
    }

    console.log(resultArr);
    return resultArr;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
function solve(input) {
    let inputArr = input;
    let resultArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] >= 0) {
            resultArr.push(inputArr[i]);
        } else {
            resultArr.unshift(inputArr[i]);
        }
    }

    for (const element of resultArr) {
        console.log(element);
    }
}


solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
function solve(numbersArr) {
    let biggest = numbersArr[0];
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] >= biggest) {
            biggest = numbersArr[i];
        } else {
            numbersArr.splice(i, 1);
            i--;
        }
    }

    return numbersArr;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
solve([1,
    2,
    3,
    4
]);

solve([20,
    3,
    2,
    15,
    6,
    1
]);
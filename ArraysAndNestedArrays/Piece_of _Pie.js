function solve(inputArr, target1, target2) {
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === target1) {
            break;
        } else {
            inputArr.shift();
            i--;
        }
    }

    for (let i = inputArr.length - 1; i > 0; i--) {
        if (inputArr[i] === target2) {
            break;
        } else {
            inputArr.pop();
        }
    }

    return inputArr;
}

solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'

)
function solve(inputArr, step) {
    let result = [];
    for (let i = 0; i < inputArr.length; i += step) {
        if (i <= inputArr.length - 1) {
            result.push(inputArr[i]);
        }
    }

    return result;
}

solve(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
);

solve(['dsa',
        'asd',
        'test',
        'tset'
    ],
    2

);

solve(['1',
        '2',
        '3',
        '4',
        '5'
    ],
    6
);
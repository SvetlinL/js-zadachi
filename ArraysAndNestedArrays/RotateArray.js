function rotate(inputArr, rotations) {
    for (let i = 0; i < rotations; i++) {
        inputArr.unshift(inputArr.pop());
    }

    console.log(inputArr.join(' '));
}

rotate(['1',
        '2',
        '3',
        '4'
    ],
    2
);

rotate(['Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15
);
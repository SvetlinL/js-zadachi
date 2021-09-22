function solveBy2Criteria(inputArr) {
    inputArr.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    });

    for (const iterator of inputArr) {
        console.log(iterator);
    }
}


solveBy2Criteria(['alpha',
    'beta',
    'gamma'
]);

solveBy2Criteria(['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George'
    ]

);

solveBy2Criteria(['test',
    'Deny',
    'omen',
    'Default'
]);
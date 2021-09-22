function solve(commandsArr) {
    let number = 1;
    const resultArr = [];
    for (const el of commandsArr) {
        if (el === 'add') {
            resultArr.push(number);
        }
        if (el === 'remove') {
            resultArr.pop();
        }
        number++;
    }
    if (resultArr.length == 0) {
        console.log('Empty');
    } else {
        for (const el of resultArr) {
            console.log(el);
        }
    }
}


solve(['add',
        'add',
        'add',
        'add'
    ]

);

solve(['add',
    'add',
    'remove',
    'add',
    'add'
]);

solve(['remove',
    'remove',
    'remove'
]);
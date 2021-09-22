function assign(inputArr) {
    const foods = {};
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 == 0) {
            foods[inputArr[i]]
        } else {
            foods[inputArr[i - 1]] = Number(inputArr[i]);
        }
    }

    console.log(foods);
}


assign(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

assign(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
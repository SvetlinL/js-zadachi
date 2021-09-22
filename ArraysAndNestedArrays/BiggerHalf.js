function solve(input) {
    input.sort((a, b) => a - b);
    let resultArr = [];
    for (let i = Math.floor(input.length / 2); i < input.length; i++) {
        resultArr.push(input[i]);
    }

    return resultArr;

}
solve([3, 19, 14, 7, 2, 19, 6]);
function solve(matrix) {
    let result = true;
    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        let sumCol = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            sumRow += matrix[row][col];
            if (col <= matrix.length - 1) {
                sumCol += matrix[col][row];
            }
        }
        if (sumRow != sumCol) {
            result = false;
            break;
        }
    }
    console.log(result);
}



solve(
    [4, 5, 6]

);

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
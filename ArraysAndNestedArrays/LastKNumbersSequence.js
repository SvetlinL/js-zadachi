function fillArr(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let sumPrevious = 0;
        for (let j = arr.length - 1; j >= 0 && j > arr.length - 1 - k; j--) {
            sumPrevious += arr[j];
        }
        arr.push(sumPrevious);
    }

    return arr;
}


fillArr(8, 2);
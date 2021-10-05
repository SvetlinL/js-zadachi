function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

// exportirane na edinichna funkciq
module.exports = sum;


// za mnojestvo funcii
// module.exports = {
//     sum,
//     fucn1,
//     func2
// }
function sameNumbers(number){
    let input = String(number);
    let same = true;
    let sum = 0;
    let firstDigit = input[0];
    for (let i = 0; i < input.length; i++){
        sum += +input[i];
        if (firstDigit !== input[i]){
            same = false;
        }
    }
    
    console.log(same);
    console.log(sum);
}

sameNumbers(2222222);
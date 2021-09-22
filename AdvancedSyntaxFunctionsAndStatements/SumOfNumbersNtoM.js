
function parseToNum(string1 , string2){
    let num1 = Number(string1);
    let num2 = Number(string2);
    let result = 0;
    for (let i = num1; i <= num2; i++) {
    result = result + i; 
    }
    console.log(result);
}


parseToNum('1', '5' );
parseToNum('-8', '20');





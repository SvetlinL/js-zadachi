function solve(inputArray, arg){
    if(arg === 'asc'){
        inputArray.sort((a,b)=> a - b);
    }else {
        inputArray.sort((a,b)=> b - a);
    }

    return inputArray;
}


solve([14, 7, 17, 6, 8], 'desc');
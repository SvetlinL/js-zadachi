function stars(count){
    let inputType = typeof(count);

    if (inputType === 'number'){
        let loop = count;
        while (loop-- >0){
            console.log('* '.repeat(count));
        }
    }else{
        let loop = 5;
        while(loop-->0){
            console.log('* '.repeat(5)); 
        }
    }
}

stars();
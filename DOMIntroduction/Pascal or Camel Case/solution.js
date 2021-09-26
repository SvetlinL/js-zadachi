function solve(){
    let inputText = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;

    let inputTextArray = inputText.toLowerCase().split(' ');
    let resultArray = [];
    if (convention === "Pascal Case"){
        for (let i = 0; i < inputTextArray.length; i++) {
            let currentWord = inputTextArray[i].charAt(0).toUpperCase();
            currentWord += inputTextArray[i].substring(1, inputTextArray[i].length);
            resultArray.push(currentWord);
        }
        document.getElementById('result').textContent = resultArray.join('');
    }else if (convention === "Camel Case"){
        for (let i = 0; i < inputTextArray.length; i++) {
            if(i>0){
                let currentWord = inputTextArray[i].charAt(0).toUpperCase();
                currentWord += inputTextArray[i].substring(1, inputTextArray[i].length);
                resultArray.push(currentWord);
            }else {
                resultArray.push(inputTextArray[i]);
            }
        }
        document.getElementById('result').textContent = resultArray.join('');
    }else {

        document.getElementById('result').textContent = 'Error!';
    }

}
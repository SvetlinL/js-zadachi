function subtract() {
    const result = document.getElementById('result');
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);

    result.innerHTML = (firstNum - secondNum).toString();


}
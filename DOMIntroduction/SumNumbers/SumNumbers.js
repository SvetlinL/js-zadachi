function calc() {
    //read value of input fields
    // sum values
    //set result as value of output field
    //!!!!!
    // za tozi tip poleta ne se polzva textContent !!!!
    //!!!!!
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    const sum = a+b;
    document.getElementById('sum').value = sum;

}

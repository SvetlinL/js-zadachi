function sumTable(){
    let rows = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < rows.length-1; i++) {
        sum += Number(rows[i].lastElementChild.textContent);
        //console.log(rows[i].lastElementChild);
    }

    document.getElementById('sum').textContent = sum;
}
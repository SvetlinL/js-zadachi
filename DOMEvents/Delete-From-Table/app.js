function deleteByEmail() {
    let inputText = document.querySelector('input[name="email"]');

    let rows = Array.from(document.querySelector('tbody').children);
    let removed = false;
    for (let row of rows){
        if (row.children[1].textContent === inputText.value){
            row.remove();
            removed = true;
        }
    }

    if (removed){
        document.getElementById('result').textContent = 'Deleted.';
    }else {
        document.getElementById('result').textContent = 'Not found.';
    }

}
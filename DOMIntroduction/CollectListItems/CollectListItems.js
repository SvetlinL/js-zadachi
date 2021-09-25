function extractText(){
    let items = document.getElementById('items').children;
    let result = [];
    for (let i = 0; i < items.length; i++) {
        result.push(items[i].textContent);
    }
    let resultArea = document.getElementById('result');
    resultArea.value = result.join('\n');
}
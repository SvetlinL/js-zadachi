function addItem() {
    let textItem = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(textItem));
    document.getElementById('items').appendChild(li);

    //clearing input
    document.getElementById('newItemText').value = '';
}
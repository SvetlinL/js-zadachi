function addItem() {
    // take input text as new element
    let newElement = document.getElementById('newItemText').value;

    // check if text field is empty
    if (newElement.length === 0) return;

    // store the list area as variable
    let list = document.getElementById('items');

    // create new element list item
    let listItem = document.createElement('li');

    // put the input text content into the new list item
    listItem.textContent = newElement;

    // create new hyperlink element <a> </a> tag
    let remove = document.createElement('a');

    // create the text node for the new hyperlink element
    let linkText = document.createTextNode('[Delete]');

    // append text node to the hyperlink element
    remove.appendChild(linkText);

    // слагаме href = # за да може бутона да е активен и да не се презарежда страницата
    remove.href = '#';

    // attach event listener to the delete text field , and link the deleteItem function to it
    remove.addEventListener('click', deleteItem);

    // put the remove element into the list item element
    listItem.appendChild(remove);

    // append the list item to the list field
    list.appendChild(listItem);

    //create the delete function
    function deleteItem(){
        // removes the list item
        listItem.remove();
    }

}
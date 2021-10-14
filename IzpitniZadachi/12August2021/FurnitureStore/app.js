window.addEventListener('load', solve);
function solve() {
    document.getElementById("add").addEventListener("click", function(event){
        event.preventDefault()
    });
    let totalPrice = Number(document.getElementsByClassName('total-price').item(0).textContent);
    document.getElementById('add').addEventListener('click', addToList);
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let price = document.getElementById('price');
    let furnitureList = document.getElementById('furniture-list');

    function addToList() {
        if (modelInput.value !== '' && yearInput.value >= 0 && descriptionInput.value !== '' && price.value >=0){
            let listRow = document.createElement('tr');
            listRow.className = 'info';
            let tdModel = document.createElement('td');
            let tdPrice = document.createElement('td');
            tdPrice.id = 'price';
            let tdButtons = document.createElement('td');
            let btnMoreInfo = document.createElement('button');
            let btnBuyIt = document.createElement('button');
            btnMoreInfo.className = 'moreBtn';
            btnBuyIt.className = 'buyBtn';
            btnMoreInfo.textContent = 'More Info';
            btnBuyIt.textContent = 'Buy it';
            tdButtons.appendChild(btnMoreInfo);
            tdButtons.appendChild(btnBuyIt);
            tdModel.textContent = modelInput.value;
            tdPrice.textContent = Number(price.value).toFixed(2);
            listRow.appendChild(tdModel);
            listRow.appendChild(tdPrice);
            listRow.appendChild(tdButtons);
            //hidden info
            let hiddenRow = document.createElement('tr');
            hiddenRow.className = 'hide';
            let tdYearInfo = document.createElement('td');
            tdYearInfo.textContent = `Year: ${yearInput.value}`;
            let tdDescription = document.createElement('td');
            tdDescription.colSpan = 3;
            tdDescription.textContent = `Description: ${descriptionInput.value}`;
            hiddenRow.appendChild(tdYearInfo);
            hiddenRow.appendChild(tdDescription);
            furnitureList.appendChild(listRow);
            furnitureList.appendChild(hiddenRow);
            document.getElementById('model').value = '';
            document.getElementById('year').value = '';
            document.getElementById('description').value = '';
            document.getElementById('price').value = '';
            for (let elementsByClassNameElement of document.getElementsByClassName('moreBtn')) {
                elementsByClassNameElement.addEventListener('click' , reveal);
            }
            for (let elementsByClassNameElement of document.getElementsByClassName('buyBtn')) {
                elementsByClassNameElement.addEventListener('click', buy);
            }
        }
    }
    function buy(ev){
        let node = ev.target.parentNode;
        let itemPrice = Number(node.parentNode.children[1].textContent);
        totalPrice += itemPrice;
        document.getElementsByClassName('total-price').item(0).textContent = Number(totalPrice).toFixed(2);
        node.parentElement.remove();

    }


    function reveal(ev){
        let parent = ev.target.parentNode;

    }


}

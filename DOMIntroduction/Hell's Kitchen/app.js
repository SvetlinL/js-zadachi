function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let inputText = JSON.parse(document.getElementById('inputs').children.item(1).value);
        let restaurants = [];

        console.log(inputText);

    }
}




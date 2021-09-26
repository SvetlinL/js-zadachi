function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let tableArray = document.querySelectorAll('tbody tr');
        let searchText = document.getElementById('searchField').value;

        for (let i = 0; i < tableArray.length; i++) {
            if (tableArray[i].textContent.toLowerCase().includes(searchText.toLowerCase())){
                tableArray[i].classList.add('select');
            }else {
                tableArray[i].classList.remove('select');
            }
        }
        document.getElementById('searchField').value = '';
    }

}
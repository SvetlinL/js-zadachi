function solve() {
    // # configuring eventListeners #
    //select all buttons
    // first button -> table generation
    // second button -> buy furniture

    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    generate.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    // # table generation #
    function generate(e) {
        // read input JSON and parse it
        // for every array element create table row
        const data =  JSON.parse(input.value);

        for (let item of row){
            const row = document.createElement('tr');

            const imgCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');
            const decFactorCell = document.createElement('td');
            const checkCEll = document.createElement('td');

            const img = document.createElement('img');
            img.src = item.img;
            imgCell.appendChild(img);
        }
    }


    // # buy furniture #
    function buy(e){
        // select all checkboxes
        // filter only checked checkboxes
        // repeat for every selected checkbox
        // -- select parent row
        // -- read item information
        // display output

        const furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(b=> b.parentElement.parentElement)
            .map(r => ({
                name: r.children[1].textContent,
                price: Number(r.children[2].textContent),
                decFactor: Number(r.children[3].textContent)
            }));
        let total = 0;
        let decFactor = 0;
        const names = [];

        for (let item of furniture) {
            total += item.price;
            decFactor += item.decFactor;
            names.push(item.name);
        }

        const result = `Bought furniture: ${names.join(' ')}
            Total price: ${total.toFixed(2)}
            Average decoration factor: ${decFactor / furniture.length}`;

        output.value = result;
    }

}
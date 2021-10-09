
function calcAvg(){
    let input = document.querySelector('ul').children;
    let sumHigh = 0;
    let sumLow = 0;
    let sumPulse = 0;
    for (let inputElement of input) {
        sumHigh += Number(inputElement.children[0].value);
        sumLow += Number(inputElement.children[1].value);
        sumPulse += Number(inputElement.children[2].value);
    }
    let date = new Date();
    let result = `${Math.floor(sumHigh/3)} / ${Math.floor(sumLow/3)} pulse: ${Math.floor(sumPulse/3)}`;
    document.getElementById('avg').value = result;

    let stats = date + "   " +result;
    return stats;

}

function save() {
    var result = calcAvg();
    let file = "log.txt";
    let blob = new Blob([result], {type: "text/plain;charset=utf-8"});
    console.log(result);
    saveAs(blob, file);
}
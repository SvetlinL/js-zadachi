async function getInfo() {
    let stopID = document.getElementById('stopId').value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    let resultUl = document.getElementById('buses');


        try{
           let response = await fetch(url);
           if (response.status !== 200){
               throw new Error(`Error`);
           }
           let data = await response.json();

           document.getElementById('stopName').textContent = data.name;

           Object.entries(data.buses).forEach(b=> {
               let li = document.createElement('li');
               li.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
               resultUl.appendChild(li);
           });

        }catch(e){
            document.getElementById('stopName').textContent = e.message;
        }

}


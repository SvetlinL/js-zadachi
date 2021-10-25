function solve() {
    let inputLecture = document.getElementsByClassName('form-control').item(0).children[1]
    let inputDate = document.getElementsByClassName('form-control').item(1).children[1];
    let inputModule = document.getElementsByClassName('form-control').item(2).children[1];

    let divModules = document.getElementsByClassName('modules').item(0);

    document.getElementsByClassName('form-control').item(3).firstElementChild.addEventListener('click', add);

    function add(ev){
        ev.preventDefault();
        if (inputLecture.value !== '' && inputDate.value !== '' && inputModule.value !== 'Select module'
                && inputModule.value !== ''){


            let [date, time] = Array.from(inputDate.value.split('T'));
            // date = date.replaceAll('-','/');
            for (let i = 0; i < date.length; i++) {
                if (date.charAt(i) === '-'){
                    date = date.replace('-','/');
                }
            }

            let divMod = Array.from(divModules.children)
                 .find(child => child.firstElementChild.textContent === `${inputModule.value.toUpperCase()}-MODULE`);

            if (divMod === undefined){
                divMod = document.createElement('div');
                divMod.classList.add('module');
                divMod.innerHTML = `
                    <h3>${inputModule.value.toUpperCase()}-MODULE</h3><ul>
                    <li class="flex"><h4>${inputLecture.value} - ${date} - ${time}</h4><button class="red">Del</button></li>    
                    </ul>
                        `;
                divModules.appendChild(divMod);
                let buttons = divMod.querySelectorAll("button");
                buttons.forEach(button => button.addEventListener('click',deleteFn));
            }
            else {
                let li = document.createElement('li');
                li.classList.add('flex');
                li.innerHTML = `<h4>${inputLecture.value} - ${date} - ${time}</h4><button class="red">Del</button>`;
                divMod.children[1].appendChild(li);

                Array.from(divMod.children[1].children).sort((a,b)=> {
                    let aDate = a.firstElementChild.textContent.split(' - ')[1];
                    let bDate = b.firstElementChild.textContent.split(' - ')[1];
                    return aDate.localeCompare(bDate);
                }).forEach(el => divMod.children[1].appendChild(el));

                let buttons = divMod.querySelectorAll("button");
                buttons.forEach(button => button.addEventListener('click',deleteFn));

            }
        }
    }

    function deleteFn(ev){
        ev.target.parentNode.remove();
        Array.from(document.getElementsByClassName('module')).forEach((divMod) =>{
            if (divMod.children[1].firstElementChild === null){
                divMod.remove();
            }

        });

    }
}
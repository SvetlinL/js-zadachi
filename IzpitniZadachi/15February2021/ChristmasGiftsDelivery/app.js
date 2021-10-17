function solution() {
    let currentGiftInput = document.querySelector('.card div input');
    let addBtn = document.querySelector('.card div button');
    addBtn.addEventListener('click', addGift);
    let ulGifts = document.querySelector('.card ul');

    function addGift(){
        let li = document.createElement('li')
        li.classList.add('gift');
        li.innerHTML = `${currentGiftInput.value}<button id = "sendButton">Send</button><button id = "discardButton">Discard</button>`;
        ulGifts.appendChild(li);
        document.querySelector('.card div input').value = '';
        Array.from(ulGifts.children).sort((a,b)=> a.textContent.localeCompare(b.textContent))
            .forEach(li => {
                ulGifts.appendChild(li);
            });
        let buttons = li.querySelectorAll('button');
        buttons[0].addEventListener('click', send);
        buttons[1].addEventListener('click', discard);

    }

    function send(ev){
        let giftName = ev.target.parentNode.innerText.replace('Send', '').replace('Discard','');
        ev.target.parentNode.remove();
        let ulSentGifts = document.querySelectorAll('.card ul')[1];
        let li = document.createElement('li');
        li.textContent = giftName;
        ulSentGifts.appendChild(li);
    }


    function discard(ev){
        let giftName = ev.target.parentNode.innerText.replace('Send', '').replace('Discard','');
        ev.target.parentNode.remove();
        let ulDiscardGifts = document.querySelectorAll('.card ul')[2];
        let li = document.createElement('li');
        li.textContent = giftName;
        ulDiscardGifts.appendChild(li);
    }
}
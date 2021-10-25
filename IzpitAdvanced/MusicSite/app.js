window.addEventListener('load', solve);

function solve() {
    let inputGenre = document.getElementById('genre');
    let inputName = document.getElementById('name');
    let inputAuthor = document.getElementById('author');
    let inputDate = document.getElementById('date');

    let allHitsContainer = document.getElementsByClassName('all-hits-container').item(0);
    document.getElementById('add-btn').addEventListener('click', addSong);
    let likesCount = Number(0);
    let saveContainer = document.getElementsByClassName('saved-container').item(0);
    console.log(saveContainer);


    function addSong(ev){
        ev.preventDefault();
        if (inputGenre.value !== '' && inputName.value !== '' && inputAuthor.value !== '' && inputDate.value !== ''){

            let div = document.createElement('div');
            div.classList.add('hits-info');
            div.innerHTML = `<img src="./static/img/img.png">
<h2>Genre:${inputGenre.value}</h2>
<h2>Name:${inputName.value}</h2>
<h2>Author:${inputAuthor.value}</h2>
<h3>Date:${inputDate.value}</h3>
<button class="save-btn">Save song</button>
<button class="like-btn">Like song</button>
<button class="delete-btn">Delete</button>
`;



            allHitsContainer.appendChild(div);

            let buttons = div.querySelectorAll('button');
            buttons[0].addEventListener('click', saveSong);
            buttons[1].addEventListener('click', likeSong);
            buttons[2].addEventListener('click', deleteFn);

            document.getElementById('genre').value = '';
            document.getElementById('name').value = '';
            document.getElementById('author').value = '';
            document.getElementById('date').value = '';
        }

    }

    function likeSong(ev){
        ev.target.disabled = true;
        likesCount ++;
        let likes = document.getElementsByClassName('likes').item(0).firstElementChild;
        likes.innerHTML = `Total Likes: ${likesCount}`;

    }

    function saveSong(ev){
        saveContainer.appendChild(ev.target.parentElement);
        ev.target.nextElementSibling.remove();
        ev.target.remove();

    }

    function deleteFn(ev){
        ev.target.parentNode.remove();
    }
}
function solve() {

    let author = document.getElementById('creator');
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let content = document.getElementById('content');
    let archiveLi = [];

    document.getElementsByClassName('btn create').item(0).addEventListener('click', createArticle);
    let articleSection = document.querySelector('.site-content main section');
    let ol = document.getElementsByClassName('archive-section').item(0).children[1];

    function createArticle(ev) {
        ev.preventDefault();
        let article = document.createElement('article');
        article.innerHTML = `<h1>${title.value}</h1>
                <p>Category:
                    <strong>${category.value}</strong>
                </p>
                <p>Creator:
                <strong>${author.value}</strong>
                </p>
                <p>${content.value}</p>
                <div class="buttons">
                    <button class = "btn delete">Delete</button>
                    <button class = "btn archive">Archive</button>
                </div>`;
        articleSection.appendChild(article);
        let buttons = article.querySelectorAll('button');
        buttons[0].addEventListener('click', deleteFn);
        buttons[1].addEventListener("click", archive);

        document.getElementById('creator').value = '';
        document.getElementById('title').value = '';
        document.getElementById('category').value = '';
        document.getElementById('content').value = '';
    }

    function deleteFn(ev) {
        let article = ev.target.parentNode.parentNode;
        article.remove();
    }

    function archive(ev) {
        let title = ev.target.parentNode.parentNode.firstChild.textContent;
        let li = document.createElement('li');
        li.textContent = title;
        archiveLi.push(li);
        archiveLi.sort((a,b)=> a.textContent.localeCompare(b.textContent));
        archiveLi.forEach(li=>{
           ol.appendChild(li);
        });
        deleteFn(ev);
    }
}

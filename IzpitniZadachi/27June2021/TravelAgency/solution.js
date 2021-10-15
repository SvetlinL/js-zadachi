window.addEventListener('load', solution);

function solution() {
    // let fullName = document.getElementById('fname').value;
    // let email = document.getElementById('email').value;
    // let phoneNumber = document.getElementById('phone').value;
    // let address = document.getElementById('address').value;
    // let posCode = document.getElementById('code').value;

    let infoPreviewDiv = document.getElementById('infoPreview');

    function submit() {
        if (document.getElementById('fname').value !== '' && document.getElementById('email').value !== ''){
            let divs = document.getElementById('form').children;
            for (let i = 0; i < divs.length-1; i++) {
                let li = document.createElement('li');
                li.textContent += divs[i].firstElementChild.textContent;
                li.textContent +=' '+ divs[i].lastElementChild.value;
                infoPreviewDiv.appendChild(li);
            }
            document.getElementById('submitBTN').disabled = true;
            for (let i = 0; i < divs.length-1; i++) {
                divs[i].lastElementChild.value = '';
            }
            let editBtn = document.getElementById('editBTN');
            let continueBtn = document.getElementById('continueBTN');
            editBtn.disabled = false;
            continueBtn.disabled = false;
            editBtn.addEventListener('click', edit)
            continueBtn.addEventListener('click', continueFn);

            function edit() {
                editBtn.disabled = true;
                continueBtn.disabled = true;
                let infoList = document.querySelectorAll('#infoPreview li');
                for (let i = 0; i < divs.length-1; i++) {
                    divs[i].lastElementChild.value = infoList[i].textContent.split(': ')[1].trim();
                }
                document.getElementById('submitBTN').disabled = false;
                document.getElementById('infoPreview').innerHTML = '';
            }

            function continueFn() {
                document.getElementById('block').innerHTML = '';
                let h3 = document.createElement('h3');
                h3.textContent = 'Thank you for your reservation!';
                document.getElementById('block').appendChild(h3);
            }
        }
    }
    document.getElementById('submitBTN').addEventListener('click', submit);

}

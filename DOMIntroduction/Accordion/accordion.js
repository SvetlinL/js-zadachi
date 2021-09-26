function toggle(){
    let button = document.querySelector('.button');
    if (button.textContent === 'More'){
        button.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }else {
        button.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }

    console.log(button)
}
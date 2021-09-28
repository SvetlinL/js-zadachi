function lockedProfile() {
    // add toggle eventListener to all profile buttons

    //find associated profile details
    // if its visible -> hide it and display label 'Show more'
    // otherwise -> show it and display label 'Hide it'

    Array.from(document.querySelectorAll('.profile button')).forEach(btn =>
        btn.addEventListener('click', onToggle));

    function onToggle(e){
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value= "unlock"]').checked;
        if (isActive){
            const infoDif = profile.querySelector('div');
            /*
            const infoDif = Array
                .from(e.target.parentElement.querySelectorAll('div'))
                .find(d => d.id.includes('HiddenFields'));
                */
            if (e.target.textContent === 'Show more'){
                infoDif.style.display = 'block';
                e.target.textContent = 'Hide it';
            }else {
                infoDif.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}
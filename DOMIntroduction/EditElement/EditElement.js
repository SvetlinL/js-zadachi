function editElement(ref, match, replacer){
    let text = document.getElementById('e1').textContent;
    const matcher = new RegExp(match, 'g');
    ref.textContent = text.replace(matcher, replacer);
}
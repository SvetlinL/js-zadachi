function editElement(ref, match, replacer) {
    let content = ref.textContent;
    ref.textContent = content.replaceAll(match, replacer);

}
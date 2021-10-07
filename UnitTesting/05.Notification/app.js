function notify(message) {
  let div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = 'block';

  function hide(event) {
    event.target.style.display = 'none';
  }

  div.addEventListener('click', hide);
}
function search(){
   let listArray = Array.from(document.getElementById('towns').children);
   let searchText = document.getElementById('searchText').value;

   let counter = 0;
   for (let i = 0; i < listArray.length; i++) {
      if (listArray[i].textContent.includes(searchText)){
         listArray[i].style.fontWeight = 'bold';
         listArray[i].style.textDecoration = 'underline';
         counter ++;
      }else {
         listArray[i].style.fontWeight = '';
         listArray[i].style.textDecoration = '';
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}
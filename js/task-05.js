let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

input.addEventListener('input', event => {
   const userText = input.value;
   if (userText === '') {
      return output.textContent = 'Anonymous';
   } 
      output.textContent = userText;

});
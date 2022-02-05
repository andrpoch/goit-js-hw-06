const input = document.querySelector('#validation-input');
const inputData = Number(input.dataset.length);
function onChange(a,b){
   input.classList.add(a);
   input.classList.remove(b);
}

input.addEventListener('blur', onBlur => {
      if (input.value.length === inputData) {
         onChange('valid', 'invalid');
      } else {
         onChange('invalid', 'valid');
   }
}); 

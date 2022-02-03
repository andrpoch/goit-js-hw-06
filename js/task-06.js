const input = document.querySelector('#validation-input');
const inputData = Number(input.dataset.length);
input.addEventListener('blur', onBlur => {
      if (input.value.length === inputData) {
         input.classList.add('valid');
          input.classList.remove('invalid');
   } else {
      input.classList.remove('valid');
         input.classList.add('invalid');
   }
});

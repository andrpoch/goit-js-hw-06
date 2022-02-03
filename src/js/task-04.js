let valueElem = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  valueElem += 1;
  counterValue.innerText = valueElem;
});

dekrBtn.addEventListener('click', event => {
  valueElem -= 1;
  counterValue.innerText = valueElem;
});
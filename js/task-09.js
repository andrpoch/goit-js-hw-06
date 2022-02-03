
// Напиши скрипт, который изменяет цвета фона элемента < body > через 
// инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let result = getRandomHexColor();
const color = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');

btnColor.addEventListener('click', onChange => {
  bodyColor.style.backgroundColor = result;
  color.textContent = result;
  

});
"use strict";
const ctg = document.querySelector('#categories');
const ctgNumber = ctg.children.length;
console.log(`Number of categories: ${ctgNumber}`);

const list = document.querySelectorAll('.item');
list.forEach(elem => {
 const listCtg = elem.firstElementChild.textContent;
 const listElem = elem.lastElementChild.children.length;
  console.log(`Category: ${listCtg}, Elements: ${listElem}`,)
});

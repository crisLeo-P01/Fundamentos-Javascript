//document.getElementById('id') - Acceder a un elemento a través de su id
const title = document.getElementById('title');
title.textContent = 'DOM - Accediendo a nodos';

//document | element.querySelector('slectorCSS') - Accede al primer elemento que coincida con el selector CSS
const paragraph = document.querySelector('.paragraph');
console.log(paragraph);

const span = paragraph.querySelector('span'); //accediendo desde un elemento
console.log(span);

const span02 = document.getElementById('title').querySelector('span');
// console.log(span02.textContent);

//document.querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
const paragraph02 = document.querySelectorAll('.paragraph2');
// paragraph02[1].style.color='red';

console.log(paragraph02);

//No es compatible con todos los navegadores
const paragraphSpread = [...document.querySelectorAll('.paragraph03')];
paragraphSpread.map(p=>p.style.color = 'green');


const paragraphArray = Array.from(document.querySelectorAll('.paragraph04'));
paragraphArray.map(p=>p.style.color='violet');
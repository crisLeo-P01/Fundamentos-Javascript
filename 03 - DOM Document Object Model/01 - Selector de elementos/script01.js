// document.getElementById('id') - Acceder a un elemento a través de su id
const title = document.getElementById('title');
console.log(title);
// Modificando elementos del HTML de forma dinámica
title.textContent = 'Estudiando el DOM'

// document.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selectot CSS
const paragraph = document.querySelector('.paragraph');
console.log(paragraph);

// Acceder a un elemento que esta dentro de otro
const span = document.querySelector('.paragraph').querySelector('span');
console.log(span.textContent)

const paragraph2 = document.querySelector('.paragraph:nth-child(2)');
console.log(paragraph2);

// document.querySelectorAll('selectorCSS') - Accede a todos los elementos que coinciden con el selector CSS, decuel un nodeList
const parrafos = document.querySelectorAll('.parrafos');
console.log(parrafos);

// Para tratarlo como un Array
const parrafoArray = Array.from(document.querySelectorAll('.parrafos'));
parrafoArray.map((p) => p.style.color = 'blue');

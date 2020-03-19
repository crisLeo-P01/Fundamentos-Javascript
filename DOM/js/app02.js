/*
Atributos
  element.getAttribute('attribute');
  element.setAttribute('attribute', value);

Clases
  element.classList.add('class', 'class', ...);
  element.classList.remove('class', 'class', ...);
  element.classList.toggle('class'[,force]);
  element.classList.contains('class');
  element.classList.replace('oldClass', newClass);

Atributos directos
  id
  value
*/

const title = document.getElementById('title01');
const name = document.getElementById('name');

console.log(title);
console.log(name);

console.log(name.getAttribute('type')); //Saber el tipo de dato
name.setAttribute('type','date'); //Modificando atributos en el DOM
name.removeAttribute('type'); //Remueve un atributo

//Clases
const title02 = document.getElementById('title02');

title02.classList.add('main-title', 'title-black'); //Se puede agregar la cantidad que quiera de clases
title02.classList.remove('title-black'); //Removiendo clases

console.log(title02);

///////////////////////////////////////////////////

const title03 = document.getElementById('title03');

if(title03.classList.contains('title')) {
    console.log('Title tiene la clase title');
} else console.log('Title no tiene la clase title');

///////////////////////////////////////////////////

const title04 = document.getElementById('title04');
title04.classList.replace('title', 'title-red'); //Reemplaza la clase por otra

/*Ambos hacen el mismo trabajo, solo que el innerHTML recoge todo lo que hay dentro de title, mientras que
textContent recoge el texto plano, sin los span dentro*/
console.log(title04.innerHTML);
console.log(title04.textContent);

const name02 = document.getElementById('name02');

console.log(name02.value.length);

console.log(name02);

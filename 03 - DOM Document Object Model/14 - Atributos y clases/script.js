/*
Atributos
  element.getAttribute('attribute')
  element.setAttribute('attribute', value);

Clases
  element.classList.add('class', 'class', ...);
  element.classList.remove('class', 'class', ...);
  element.classList.toggle('class'[,force]);
  element.classList.contains('class');
  element.classList.contains('class');
  element.classList.replace('oldClass', newClass);

Atributos directos
    id
    value
*/

const title = document.getElementById('title');
const name = document.getElementById('name');
const email = document.getElementById('email');

// getAttribute - devuelve el valor del atributo especificado en el elemento. ->
// Si el atributo especificado no existe, el valor retornado puede ser tanto null.
console.log(name.getAttribute('type'));

// setAttribute - Si el atributo ya existe, el valor es actualizado, en caso contrario, ->
// el nuevo atributo es añadido con el nombre y valor indicado
email.setAttribute('type', 'date');
console.log(email);

// classList.add - agrega clases
title.classList.add('main-title', 'red-title');

// classList.remove - remueve clases
title.classList.remove('title');

// classList.contains - comprueba si contiene la clase que le especificamos.
if (title.classList.contains('title')) {
  console.log('Title tiene la clase title');
} else {
  console.log('Title NO tiene la clase title');
}

title.classList.replace('red-title', 'green-title');

// innerHTML - toma de forma literal al elemento tomando en cuenta las etiquetas que estan dentro
console.log(title.innerHTML);

// .textContent - Toma el elemento de forma plana.
console.log(title.textContent);

console.log(name.value);

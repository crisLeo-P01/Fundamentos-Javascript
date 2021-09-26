/* eslint-disable no-restricted-syntax */
/*
DOM - Crear e insertar elementos

Crear un elemento: document.creatElement(element)
Escribir texto en un elemento: element.textContent = text
Escribir HTML en un elemento: element.innerHTML = código HTML
Agregar un atributo a un elemento: element.setAttribute(par1, par2)

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

// creando elemento
const itemList = document.createElement('LI');
itemList.textContent = 'Lunes'; // A ese elemento agregado, le colocamos contenido

daysList.appendChild(itemList); // Agregamos el elemento al ul con el id daysList

title.innerHTML = 'DOM - <span>Crear e insertar elementos</span>'; // La forma de agregar etiquetas a un documento HTML

/* El .createDocumentFragment() es un contenedor en donde vamos a escribir todo el HTML
que queremos inyectar en el documento. Una vez creado es inyectar todo el fragmento del código de
golpe y de esa forma, ahorramos muchísimos recursos por parte del navegador */
const fragment01 = document.createDocumentFragment();

for (const day01 of days) {
  const itemList2 = document.createElement('LI');
  itemList.textContent = day01;
  fragment01.appendChild(itemList2);
}

daysList.appendChild(fragment01);

// /////////////////////////////////////////////////////

const fragment02 = document.createDocumentFragment();

for (const day02 of days) {
  const selectItem = document.createElement('OPTION');
  selectItem.setAttribute('value', day02.toLowerCase());
  selectItem.textContent = day02;
  fragment02.appendChild(selectItem);
}

selectDays.appendChild(fragment02);

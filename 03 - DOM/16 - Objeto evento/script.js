const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

input.addEventListener('keyup', (e) => {
  console.log(e);
});

button.addEventListener('click', (e) => {
  console.log(e.target);
});

// //////////////////////////////////////////////////

const gallery = document.getElementById('gallery');
gallery.addEventListener('click', (e) => {
  e.target.classList.add('red');
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault(); // evita que se recargue la página
  console.log('El formulario se ha enviado');
});

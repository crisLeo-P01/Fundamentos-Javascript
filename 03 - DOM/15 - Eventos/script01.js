// EVENTOS de ratón
//   - click: cuando pulsamos el botón izquierdo del mouse
//   - dblclick: cuando pulsamos dos veces el botón izquierdo del mouse
//   - mouseenter: cuando entramos en la zona que tiene el evento
//   - mouseleave: cuando salimos de la zona que tiene el evento
//   - mousedown: cuando pulsamos y no soltamos el botón izquierdo del mouse
//   - mouseup: cuando soltamos el botón izquierdo del mouse
//   - mousemove: cuando movemos el mouse sobre el evento

// EVENTO CLICK
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log('click');
});

// //////////////////////////////////////////

// EVENTO DOBLE CLICK
const btn2 = document.getElementById('btn2');
btn2.addEventListener('dblclick', () => {
  console.log('DOBLE CLICK');
});

// EVENTO MOUSEENTER
const btn3 = document.getElementById('btn3');
btn3.addEventListener('mouseenter', () => {
  btn3.classList.add('violet');
  console.log('MOUSEENTER');
});

// EVENTO MOUSELEAVE
btn3.addEventListener('mouseleave', () => {
  btn3.classList.replace('violet', 'red');
  console.log('MOUSELEAVE');
});

// EVENTO MOUSEDOWN
const btn5 = document.getElementById('btn5');
btn5.addEventListener('mousedown', () => {
  console.log('MOUSEDOWN');
});

// EVENTO MOUSEUP
const btn6 = document.getElementById('btn6');
btn6.addEventListener('mouseup', () => {
  console.log('MOUSEUP');
});

// EVENTO MOUSEMOVE
const btn7 = document.getElementById('btn7');
btn7.addEventListener('mousemove', () => {
  console.log('MOUSEMOVE');
});

// EVENTOS DE TECLADO
//  - keydown => cuando apretamos una tecla del teclado
//  - keyup => cuando soltamos una tecla del teclado
//  - keypress => cuando pulsamos una tecla del teclado y no la soltamos

const input = document.getElementById('input');
input.addEventListener('keydown', () => {
  console.log('Es presionado una tecla');
});

const input2 = document.getElementById('input2');

input2.addEventListener('keyup', () => {
  console.log('HAS SOLTADO UNA TECLA');
});

const input3 = document.getElementById('input3');
input3.addEventListener('keypress', () => {
  console.log('ESTAS PRESIONANDO UNA TECLA');
});

// //////////////////////////////////////////////////

const input4 = document.getElementById('input4');
input4.addEventListener("keydown", (e) => {
  console.log(e.key);
});

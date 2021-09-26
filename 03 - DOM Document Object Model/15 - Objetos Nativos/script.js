const button = document.getElementById('button');
/*
  Objeto windows - Es el objeto global, de él descienden todos los objetos
  alert()
  prompt()
  confirm()
*/

addEventListener('click', (e) => {
  console.log(e);
});

addEventListener('load', (e) => {
  console.log(e);
});

/*
  Objeto console - Es el objeto que contiene la consola del navegador
  console.log()
  console.dir() Funciona de la misma forma que el console.log
  console.error()
  console.table()
*/

const persona = {
  name: 'Cristian',
  age: 34,
  email: 'cristian@gmail.com',
};

console.table(persona);

/*
  Objeto location - Es el objeto que contiene la barra de direcciones
  location.href
  location.protocol
  location.host
  location.pathname
  location.hash
  location.reload()
*/

/*
  Objeto history
  history.back()
  history.foward()
  history.go(n | -n) En una misma pestaña adenlanta x páginas o retroce x páginas
*/

/*
  Objeto date
  https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

// Instanciar el objeto / crear
const dateInfo = new Date();
console.log(dateInfo.getDay()); // Siendo 0, día domingo. Día de la semana
console.log(dateInfo.getDate()); // Día del mes
console.log(dateInfo);

/*
  Timers
  Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
  setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay.
  Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
  Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
  setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos.
  Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

const saludar = () => {
  console.log('hola');
};

button.addEventListener('click', () => {
  setTimeout(saludar, 2000); // Si la función es externa, no hace falta la función de flecha aquí
  setTimeout(() => {
    console.log('Adios');
  }, 3000);
});

// ////////////////////

const button02 = document.getElementById('button02');
const timeout = setTimeout(() => {
  console.log('Adios x2');
}, 4000);

button02.addEventListener('click', () => {
  clearTimeout(timeout);
});

// ////////////////////
const btn3 = document.getElementById('button03');
let cont = 0;

const interval = setInterval(() => {
  console.log(cont);
  cont++;
}, 1000);

btn3.addEventListener('click', () => {
  clearInterval(interval);
});

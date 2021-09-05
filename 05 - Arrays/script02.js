
//PROPIEDADES ARRAY
let numerosF = [1,2,3,4,5,6,7];

console.log(numerosF.length);
console.log(numerosF[3]);
console.log(`La suma de ${numerosF[2]} y ${numerosF[4]} es ` + (numerosF[2] + numerosF[4]));

///////////////////////////////////////////

//MÉTODOS ARRAY
// Array.isArray(variable a evaluar) - Devuelve true si la variable es un array

let numberisArray = 7;
console.log(Array.isArray(numberisArray));
console.log(Array.isArray(numerosF));
///////////////////////////////////////////
let palabras = ['Hola' , 'estamos' , 'trabajando' , 'con' , 'SublimeText3'];

console.log(`${palabras[1]} ${palabras[2]}`);
console.log(`La palabra "${palabras[2]}" tiene ${palabras[2].length} letras`);

// ARRAY FROM()
/*
.form(iterable) - Convierte en array el elemento iterable.
*/
console.log(".from()");
let palabra = 'Hola Mundo';
console.log(Array.from(palabra));
console.log(palabra.split(''));

console.log(palabra.split(' '));

//ARRAY SORT()
/*
.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode),si le pasamos un
callback los ordena en función del algoritmo que le pasemos.
*/
console.log(".sort()");
let letras = ['c', 'h', 'f', 't', 'z', 'a'];
console.log(letras);
console.log(letras.sort());

let numeros = [7, 3, 10, 1, 30, 700, 300];
console.log(numeros);
console.log(numeros.sort());
/* Tener en cuenta que 10 viene antes que 2 porque '1'0 viene antes que '2' según la posición del
valor Unicode.*/
console.log(numeros.sort((a,b) => a - b));
/*
function menorMayor(a, b) {
  if(a-b < 0) return -1;
  if(a-b > 0) return 1;
  if(a == b) return 0;
}

function mayorMenor(a, b) {
  if(b-a < 0) return -1;
  if(b-a > 0) return 1;
  if(b == a) return 0;
}
*/

let cosas = ['word', 'Word', '1 Word', '2 Words'];
console.log(cosas.sort());
// En Unicode, los números vienen antes que las letras mayúsculas y estas vienen antes que las letras minúsculas.

//FOREACH(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.
console.log(".forEach()");
const numeros2 = [12, 25, 47, 84, 98];
numeros2.forEach((numeros2) => console.log(numeros2));

const numeros3 = [7, 25, 23, 105, 32];
numeros3.forEach((num3, index) => console.log(`${num3} está en la posición ${index}`));

for(let i = 0; i < numeros2.length; i++) {
  console.log(numeros2[i]);

}
for(const n2 in numeros2){
  console.log(numeros2[n2]);
}

//.some(callback) - Comprueba si al menos un elemento del array cumple la condición. Devuelve true o false
console.log(".some()");
const programming = ['HTML', 'CSS', 'JavaScript', 'PHP'];
console.log(programming.some(prog => prog.length>2));
//.every(callback) - Comprueba si todos los elementos del array cumplen la condición. Devuelve true o false
console.log(programming.every(prog => prog.length>3));

//.map(callback) - Transporta todos los elementos del array y devuelve un nuevo array
console.log(".map()");
const numeros4 = [12, 25, 47, 84, 98];
numeros4.map(number => console.log(number * 2));
//Esto es igual a:
for (const number2 of numeros4) {
  console.log(number2 * 2);
}
//También crear una nueva ARRAY a base de la ya existente
const number3 = numeros4.map(number3 => number3 * 2);
console.log(number3);

//.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
console.log(".filter()");
const numeros5 = [3, 7, 13, 34, 32, 78, 105, 43];
const number4 = numeros5.filter(number4 => number4 > 33);
console.log(number4);

//.reduce(callback) - Reduce todos los elementos del array a un único valor
console.log(".reduce()");
const numeros6 = [3, 7, 18, 37, 32, 64, 107, 9];
console.log(numeros6.reduce((a, b) => a + b));

//EJEMPLO DE REDUCE
const users = [
  {
    name: 'user1',
    online: true
  },
  {
    name: 'user2',
    online: false
  },
  {
    name: 'user3',
    online: false
  },
  {
    name: 'user4',
    online: true
  },
  {
    name: 'user5',
    online: true
  },
  {
    name: 'user6',
    online: true
  }
];

const userOnline = users.reduce((cont, user) => {
  if(user.online) cont++;
  return cont;
}, 0);

console.log(`Hay ${userOnline} usuarios conectados`);
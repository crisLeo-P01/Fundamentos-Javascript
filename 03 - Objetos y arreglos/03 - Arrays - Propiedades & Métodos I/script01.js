// PROPIEDADES ARRAY
const numerosF = [1, 2, 3, 4, 5, 6, 7];

console.log(numerosF.length);
console.log(numerosF[3]);
console.log(`La suma de ${numerosF[2]} y ${numerosF[4]} es ${numerosF[2] + numerosF[4]}`);

// /////////////////////////////////////////
// MÉTODOS ARRAY
// Array.isArray(variable a evaluar) - Devuelve true si la variable es un array

const numberisArray = 7;
console.log(Array.isArray(numberisArray));
console.log(Array.isArray(numerosF));

// /////////////////////////////////////////

const articulos = ['Zapatillas', 'Camisetas', 'Pantalon', 'Calcetines'];
// UNSHIFT agrega uno o mas elementos a lo primero
articulos.unshift('Balón');
console.log(`<p>Casi nos olvidamos!!! Agregamos este articulo: <strong>${articulos[0]}</strong></p>`);

// PUSH agrega uno o mas elementos al array a lo último
// eslint-disable-next-line no-alert
articulos.push(prompt('Introduce el articulo'));
console.log(articulos[articulos.length - 1]);

// SHIFT elimina el primer elemento del array
articulos.shift();
console.log(`<p>${articulos[0]} <br> ${articulos[1]} <br> ${articulos[2]} <br> ${articulos[3]} <br> ${articulos[4]} <br> ${articulos[5]}</p>`);

// POP elimina el último elemento del array
// El método pop borra el último elemento
articulos.pop();
console.log(`<p>${articulos[0]} <br> ${articulos[1]} <br> ${articulos[2]} <br> ${articulos[3]}</p>`);

// /////////////////////////////////////////

// REVERSE() invierte los elementos de un array
const marcasAutos = ['Audi', 'BMW', 'Peugeot', 'Ford'];
console.log(marcasAutos.reverse());

// /////////////////////////////////////////
// JOIN() devuelve un string con el separador que le indiquemos (por defecto, son comas)
console.log(' JOIN()');
const numJoin = [4, 7, 14, 3, 32, 43];
console.log(numJoin);
console.log(numJoin.join(' / '));

// /////////////////////////////////////////
/*
SPLICE(a, b, items) cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
a - indice de inicio
b - número de elemento(opcional)
items - elementos a añadir en el caso de que se añadan(opcional)
*/

const numSplice = [5, 9, 14, 32, 75, 105];
// numSplice.splice(2)
numSplice.splice(2, 2);
// numSplice.splice(2, 0, 50, 51,52)
console.log(numSplice);

// /////////////////////////////////////////
/*
SLICE(a,b) => extrae elementos de un array desde el indice "a" hasta el indice "b". Si no existe "b" lo hace desde "a"
hasta el final, si no existe ni "a" ni "b" hace una copia del original
*/

const numSlice = [4, 704, 502, 432, 12, 24];

// console.log(numSlice.slice(2));
console.log(numSlice.slice(2, 4)); // incluye la posición 2 pero no la 4

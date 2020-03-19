/*
El operador de propagación (spread operator) permite que una expresión sea expandida en situaciones donde se esperan
múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).
 */

const numeros = [4, 7, 13, 19, 38, 32, 89, 64, 107];
console.log(...numeros); //Como trabaja el spread operator

//Enviar elementos de un array a una función///////////////////////////
const agregarNumeros = (a,b,c) => {
  console.log(a + b + c);
};
const addNumeros = [1, 2, 3];
agregarNumeros(...addNumeros);

//Añadir un array a otro array/////////////////////////////////////////
let users = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes'];
let newUsers = ['Marta', 'Jaime', 'Laura'];
// users.push(newUsers[0], newUsers[1], newUsers[2]);
// Agregando usuarios al array users de una forma muy complicada si se trata de miles de usuarios.
// console.log(users);

users.push(...newUsers);
console.log(users);

//Copiar Arrays////////////////////////////////////////////////////////
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

//Concatenar Arrays////////////////////////////////////////////////////
let arr3 = [7, 13, 18];
let arr4 = [32, 43, 78];
let arrConcatenar = arr3.concat(arr4);
console.log(arrConcatenar);
//Otra forma sería...
let arrConcatenar02 = [...arr3, ...arr4];
console.log(arrConcatenar02);

//Enviar un número indefinido de argumentos a una función (parámetros REST)////
const restParms = (...numbers) => {
  console.log(numbers)
};
restParms(1, 2, 3, 4, 5, 6, 7);

//Librería Math////////////////////////////////////////////////////////
const numbers02 = [-14, -34, 2, 7, 14, 32];
console.log(`Array para sacar max y min: ${numbers02}`);
console.log(`El máximo es: ${Math.max(...numbers02)}`);
console.log(`El mínimo es el: ${Math.min(...numbers02)}`);

//Eliminar elementos duplicados////////////////////////////////////////
const numbers03 = [-14, -34, 2, 7, -14, 32, 2, -34];
console.log(`Array con sus números repetidos: ${numbers03}`);
console.log(...new Set(numbers03));
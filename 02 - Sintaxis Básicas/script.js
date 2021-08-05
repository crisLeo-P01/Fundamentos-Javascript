
let palabras = "Hola Mundo";
console.log(palabras);

/*PROPIEDADES
.lenght -> Devuelve la longitud de una cadena. Hay que tener en cuenta que los espacios en blanco la propiedad lenght
 también los toma en cuenta*/
let nombre = "Cristian Paiva";
console.log(nombre.length);

/*MÉTODOS
Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.

.toUpperCase() -> Devuelve la cadena a mayúsculas */
let consola = "PlayStation 5";
console.log(consola);

let consolaMayus = consola.toUpperCase();
console.log(consolaMayus);

/*
.toLowerCase() -> Devuelve la cadena a minúsculas */
let pais = "ARGENTINA";
console.log(pais.toLowerCase());

/*
.indexOf(string) -> Devuelve la posición en la que se encuentra el string, si no la encuentra devuelve -1.
En el caso de que encuentre lo que buscamos, el programa deja de seguir buscando más coincidencia.
*/
console.log(palabras.indexOf('o'));

/*
.replace(valor a buscar, valor nuevo) -> Reemplaza el fragmento de la cadena que le digamos y pone el valor nuevo
*/

let casa = "Casa nueva";
console.log(casa.replace('nueva', 'vieja'));

/*
.substring(inicio [,fin]) -> Extrae los caracteres desde el inicio hasta el fin (el final no se incluye)
*/

let frase = "Buenos días amor";
console.log(frase.substring(3));
console.log(frase.substring(7, 12));

/*
.slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos
empezará desde atrás.
*/

let frase2 = "Buenas noches amor";
console.log(frase2.slice(-4));
console.log(frase2.slice(3, -10));

/*
.trim() -> Elimina los espacios al inicio y al final de la cadena
*/
let cadena2 = "         Estamos estudiando javascript desde la plataforma de udemy     ";
console.log(cadena2.trim());

/*
//////  ES6
startsWidth(valor, [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false.
* */
let frase3 = "Hola programación";
console.log(frase3.startsWith('H'));
console.log(frase3.startsWith('p', 5));
console.log(frase3.startsWith('P', 5));

/*
endsWidth(valor)
*/
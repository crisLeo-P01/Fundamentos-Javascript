
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

let articulos = ["Zapatillas", "Camisetas", "Pantalon", "Calcetines"];
//UNSHIFT agrega uno o mas elementos a lo primero
articulos.unshift ("Balón");
console.log (`<p>Casi nos olvidamos!!! Agregamos este articulo: <strong>${articulos[0]}</strong></p>`);

//PUSH agrega uno o mas elementos al array a lo último
articulos.push (prompt ("Introduce el articulo"));
console.log (articulos[articulos.length-1] + "</strong></p>");

//SHIFT elimina el primer elemento del array
articulos.shift ();
console.log(`<p>${articulos[0]} <br> ${articulos[1]} <br> ${articulos[2]} <br> ${articulos[3]} <br> ${articulos[4]} <br> ${articulos[5]}</p>`);

// POP elimina el último elemento del array
//El método pop borra el último elemento
articulos.pop ();
console.log(`<p>${articulos[0]} <br> ${articulos[1]} <br> ${articulos[2]} <br> ${articulos[3]}</p>`);



///////////////////////////////////////////

//REVERSE() invierte los elementos de un array
let marcasAutos = ["Audi", "BMW", "Peugeot", "Ford"];
console.log(marcasAutos.reverse());

///////////////////////////////////////////
//JOIN() devuelve un string con el separador que le indiquemos (por defecto, son comas)
console.log(' JOIN()')
let numJoin = [4, 7, 14, 3, 32, 43];
console.log(numJoin);
console.log(numJoin.join(' / '))

///////////////////////////////////////////
/*
SPLICE(a, b, items) cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
a - indice de inicio
b - número de elemento(opcional)
items - elementos a añadir en el caso de que se añadan(opcional)
*/

let numSplice = [5, 9, 14, 32, 75, 105];
console.log(numSplice.splice(2));
//console.log(numSplice.splice(2, 2));
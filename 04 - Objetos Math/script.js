/*
Objeto Math
    Propiedades:
      Math.E
      Math.PI
 */

console.log(Math.E);
console.log(Math.PI);

// Métodos

// Math.abs(x) / Devuelve el valor absoluto de x. Esto quiere decir que si al parámetro de Math.abs() le colocamos un
// -34, nos devolverá un 34 positivo
console.log(Math.abs(-105));

// Math.ceil(x) / Devuelve el entero mas grande mayor o igual qué un número.
console.log(Math.ceil(2.4));

// Math.floor(x) / Devuelve el entero mas pequeño mayor o igual qué un número.
console.log(Math.floor(2.9));

// Math.pow(x, y) / Devuelve la potencia de x elevado a la y.
console.log(Math.pow(6, 3));

// Math.random() / Genera un número pseudoaleatorio entre 0 y 1.
console.log(Math.random());

//Para generar un número aleatorio de 0 a 100 junto con el método Math.round()
console.log(Math.round(Math.random() * 100));

//Generar un número aleatorio con MÁXIMO Y MÍNIMO. (max - min) + min;
console.log(Math.round(Math.random() * (100 - 50) + 50));

//Math.sign(x) / Devuelve el signo de la x, que indica que si x es negativo, positivo o cero
console.log(Math.sign(-32)); //Devuelve => -1 | 0 | 1

//Math.sqrt(x) / Devuelve la raíz cuadrada de x
console.log(Math.sqrt(25));
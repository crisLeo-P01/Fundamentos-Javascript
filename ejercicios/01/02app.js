/*
1 - Solicita un nombre, la edad y muestra por consola el mensaje
"Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/

let nombre = prompt("Introduce tu nombre");
let edad = parseInt(prompt("Introduce tu edad por favor"), 10);

console.log(`Tu nombre es: ${nombre}. Tines ${edad} años y el año que viene tendrás ${edad + 1} años.`);

/*
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas,
triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere
calcular el área, después solicita los datos que necesites para calcularlo.
triángulo = b * h/2
rectángulo = b * h
círculo = π * r2 (pi * radio al cuadrado)
*/

let figure = prompt("Introduce que firura geométrica desea calcular. triangle, rectangle o circle");

let base;
let height;
let radius;

switch (figure) {
  case "triangle":
    base = prompt("Introduce cuanto mide la base");
    height = prompt("Introduce cuanto mide la altura");
    console.log(`El área del triángulo es de ${(base * height) / 2}`);
    break;

  case "rectangle":
    base = prompt("Introduce cuanto mide la base");
    height = prompt("Introduce cuanto mide la altura");
    console.log(`El área del rectángulo es de ${base * height}`);
    break;

  case "circle":
    radius = prompt("Introduce el radio del círculo");
    console.log(`El área del círculo es de ${Math.PI * Math.pow(radius, 2)}`);
    break;
  default:
    console.log("La figura geométrica introducida no es válida");
}

/*
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta
ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será:
1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar
*/

let num = prompt("Introduce un número del 1 al 10");

if (num > 0 && num <= 10) {
  console.log(`El número que usted eligió fue el ${num}`);
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} es par`);
    } else {
      console.log(`${i} es impar`);
    }
  }
} else {
  console.log(`El número elegido => ${num} no esta contemplado en la lista`);
}

/*
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

/*
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es
el resultado de multiplicar ese número por sus anteriores hasta la unidad.
*/

/*
!5 = 5*4*3*2*1 = 120
6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50.
Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/

/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos.
Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado
es par guarda ese número en el array de pares y si es impar en el array de impares.
Muestra por consola: -la multiplicación que se produce junto con su resultado
con el formato 2 x 3 = 6 -el array de pares e impares
*/

/*
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde.
El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del
módulo del número introducido entre 23
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/

/*
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

/*
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se
encuentra dentro del array o no.
*/

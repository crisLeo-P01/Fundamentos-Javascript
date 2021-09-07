
/*
	El bucle FOR es un bucle determinado a diferencia del bucle WHILE O DO WHILE. Con el bucle FOR ya sabremos a priori cuantas veces se va a ejecutar.
    SINTAXIS
    for (inicio;condición;incremento/decremento) {
        código a repetir mientras la condición del bucle sea cierta
    }
    continuación del programa
 */

for (let xx = 0; xx < 10; xx++) {
    console.log(`Hola`);
}

for (let z = 0; z < 20; z += 2) { // Va de dos en dos
    document.write("Adios" + "&nbsp");
}

document.write(`<hr>`)

for (let x = 10; x > 0; x--) { //Va de mayo a menor
    document.write("Hello" + "&nbsp");
}

document.write(`<hr>`)

for (let t = 1; t < 10; t++) {
    document.write("Saludos" + "<br>");
}

document.write(`<hr>`)

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write(meses[0] + "<br>");
document.write(meses[1] + "<br>");

document.write(`<hr>`)

for (let i = 0; i < 12; i++) {  //for del cual sabemos cuantos elementos tiene un array
    document.write(meses[i] + "<br>");
}

document.write(`<hr>`)

for (let i = 0; i < meses.length; i++) {// for del cual no sabemos cuantos elementos puede haber en un array ya que puede haber 5 elementos como cientos o miles de elementos dentro de un array
    document.write(meses[i] + "<br>");
}

document.write(`<hr>`)

for (let w = 1; w <= 100; w++){
    if(w%2 == 0) {
        console.log (w);
    }
}

document.write(`<hr>`)

///////////////////////////////////////////////

let trabajadores = [];
let persona = "";
let contador = 0;

while (persona !== "salir") {
    persona = prompt("Introduce trabajador. Escriba salir si no desea ingresar mas empleados");
    trabajadores[contador] = persona;
    contador++;
}

trabajadores.pop(); // al poner salir este también se guardará en el array y como no es nombre le colocamos la propiedad pop para borrar el último

for (let i = 0; i < trabajadores.length; i++) {
    document.write(trabajadores[i] + "<br>");
}
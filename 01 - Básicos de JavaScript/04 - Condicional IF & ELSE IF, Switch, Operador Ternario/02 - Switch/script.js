
let dia = parseInt (prompt ("Introduce un número del 0 al 6 siendo 1(Lunes) y 0(Domingo)"));

// SINTAXIS SIMPLE
switch (dia) {
    case 1: console.log ("Hoy es lunes."); break;
    case 2: console.log ("Hoy es martes."); break;
    case 3: console.log ("Hoy es miércoles."); break;
    case 4: console.log ("Hoy es jueves."); break;
    case 5: console.log ("Hoy es viernes."); break;
    case 6: console.log ("Hoy es sábado."); break;
    case 0: console.log ("Hoy es domingo."); break;
    default: console.log ("Tu número no está contemplado.")
}

let nombre = prompt("Introduce un nombre y te damos el apellido");

switch (nombre) {
    case "Cristian": console.log ("Su apellido es Paiva"); break;
    case "Emiliano": console.log ("Su apellido es Eggel"); break;
    case "Maria Elena": console.log ("Su apellido es Lomazzi"); break;
    default: console.log (`El nombre ${nombre} no esta contemplado.`);
}

// SINTAXIS MÚLTIPLE
let num = 4;
switch (num) {
    case 1:
    case 3:
    case 5:
    console.log (`${num} es impar`); break;
    case 2:
    case 4:
    console.log (`${num} es par`); break;
}
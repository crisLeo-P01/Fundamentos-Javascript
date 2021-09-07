// Función charAt() ------------------------
let mensaje1 = "Hola";
let mostrarMensaje = mensaje1.charAt(1);
document.write("Función charAt() de 'Hola' en la posición 1 es => " + mostrarMensaje + "<br><br>");

// Función indexOf() ------------------------
let mensaje2 = "Buenas tardes";
let mostrarMensaje9 = mensaje2.indexOf('a');
let mostrarMensaje10 = mensaje2.indexOf('f');
document.write("Función indexOf() de 'Buenas tardes' con el parámetro 'a' => " + mostrarMensaje9 + "<br>");
document.write("Función indexOf() de 'Buenas tardes' con el parámetro 'f' del cual va a devolver un -1 ya que la 'f' no existe => " + mostrarMensaje10 + "<br><br>");

// Función lastIndexOf() ------------------------
let mensaje9 = "Buenas tardes";
let mostrarMensaje3 = mensaje9.lastIndexOf('f');
let mostrarMensaje2 = mensaje9.lastIndexOf('a');
document.write("Función lastIndexOf() de 'Buenas tardes' con el parámetro 'a' => " + mostrarMensaje2 + "<br>");
document.write("Función lastIndexOf() de 'Buenas tardes' con el parámetro 'f' del cual va a devolver un -1 ya que la 'f' no existe => " + mostrarMensaje3 + "<br><br>");

// Función substring() --------------------------
let mensaje3 = "Estamos escuchando música";
let mostrarMensaje4 = mensaje3.substring(2);
let mostrarMensaje5 = mensaje3.substring(3, 9);
let mostrarMensaje6 = mensaje3.substring(-3);
document.write("Función substring() de 'Estamos escuchando música', con un solo parámetro en la posición 2 es => " + mostrarMensaje4 + "<br>");
document.write("Función substring() de 'Estamos escuchando música', con dos parámetro en la posición 3 & 9, del cual en la posición 9 no lo toma en cuenta: " + mostrarMensaje5 + "<br>");
document.write("Función substring() de 'Estamos escuchando música', con parámetro -3, el cual nos va a devolver todo el mensaje: " + mostrarMensaje6 + "<br><br>");

// Función split() -----------------------------
let mensaje4 = "Estamos estudiando JavaScript un sábado a la mañana";
let mostrarMensaje7 = mensaje4.split(" ");
document.write(mostrarMensaje7 + "<br>");

let mensaje5 = "Hola";
let mostrarMensaje8 = mensaje5.split("");
document.write(mostrarMensaje8 + "<br><br>");

// Función toFixed() ----------------------------
let numeroDecimal = 487.4584587456254;
let mostrarDecimal = numeroDecimal.toFixed(3);
document.write("Mostrando la función toFixed(3) del número " + numeroDecimal + " con tres dígitos después de la coma y es => " + mostrarDecimal);
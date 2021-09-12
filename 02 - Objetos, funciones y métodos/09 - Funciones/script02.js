function creaMensaje() {
  let mensaje = "Mensaje de prueba"; //VARIABLE DEL ÁMBITO LOCAL
  alert(mensaje);
}

creaMensaje();

/////////////////////////////////////////////////////

let mensaje2 = "Mensaje de prueba 2"; //VARIABLE DEL ÁMBITO GLOBAL

function muestraMensaje() {
  alert(mensaje2);
}

muestraMensaje();

/////////////////////////////////////////////////////

function producto(precio) {
  let costoEnvio = 40;
  let impuesto = (precio * 21) / 100;
  return precio + costoEnvio + impuesto;
  let precioProducto = precio + impuesto + costoEnvio;
}

let precioProducto = producto(1200);

console.log(precioProducto);

const producto02 = (precio02) => {
  let costoEnvio02 = 40;
  let impuesto02 = (precio02 * 21) / 100;
  // return precio02 + costoEnvio02 + impuesto02;
  let precioProducto02 = precio02 + impuesto02 + costoEnvio02;
  return precioProducto02;
};

let precioProducto02 = producto02(250);

console.log(`El precio del producto es de ${precioProducto02}`);

/////////////////////////////////////////////////////

// ESCRIBIR UNA FUNCIÓN DE LA FORMA ACTUAL => FUNCIONES DE FLECHAS
const saludar = () => console.log("Hola");

saludar();
saludar();
saludar();

const sumar = (num1, num2) =>
  //NO FUNCIONA
  num1 + num2;

console.log(sumar(5, 7));
/*
Las funciones de flechas al colocarle llaves, las funciones esperas
que reciban un return y además esperan recibir más de una línea de
código. Entonces para que la función funcione hay que sacar las llaves
*/

const sumar2 = (num3, num4) => num3 + num4;

console.log(sumar2(5, 7));

/////////////////////////////////////////

const sumar3 = (num5, num6) => {
  if (num5 === 2) {
    return num5 + num6;
  }
  console.log("Este código no se va a ejecutar si entra en el if");
  return num5;
};

console.log(sumar3(2, 4));
/*
Dentro de la función sumar3 ahy un if que si num5 es igual a 2 ejecute
la suma. Al cumplirse, entra en el if y el función finaliza ahí sin 
imprimir el console.log que esta debajo.
*/

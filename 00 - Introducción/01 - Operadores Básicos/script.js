let precioUnidad, cantidad, total; // Una declaración de tres variables en una misma línea

precioUnidad = 5;
cantidad = 100;
total = precioUnidad * cantidad;

alert("El importe total de la compra es: " + total + " $");

let camisetas, pantalones, totalArticulos;

camisetas = "5";
pantalones = 5;

totalArticulos = camisetas + pantalones;

alert(totalArticulos);

/*Como ya se ve, estamos declarando tres variables en una sola línea que luego se las inicia. La particularidad
es que la variable "camisetas" la inicia con "5" entre comillas, mientras que pantalones la inicia con 5. Esto es,
 que el valor que le estamos colocando en la variable camisetas no es de TIPO NUMÉRICO, sino de tipo STRING, ya
 que el 5 entra entre comillas. Entonces lo que hay dentro de la variable camisetas lo toma como si fuese texto
 y NO un número. En cambio la variable pantalones, SI es de TIPO NUMÉRICO.
En este caso al poner la propiedad alert para sumar tanto la cantidad de camisetas como la de pantalones, lo que
NO hace es sumar ambos, sino concatenando. Lo que quiere decir también es que la suma (+) no solo suma dos
números, sino también puede concatenar, así que MUCHO OJO. */

let zapatillas, ojotas, cantidadArticulos;

zapatillas = 6;
ojotas = 7;
cantidadArticulos = zapatillas + ojotas;

alert(
  "La cantidad de artículos es: " + cantidadArticulos + " pares entre zapatillas y ojotas");

//Esta sería la forma en que sumaría ambos productos de la forma correcta

//*Otra forma de poder sumar dos números aunque una de las variables este iniciada como STRINGS sería:

let vasos, platos, cantidadMesa;

vasos = "5";
platos = 5;
cantidadMesa = Number(vasos) + platos;

alert("La cantidad entre vasos y platos es de " + cantidadMesa);
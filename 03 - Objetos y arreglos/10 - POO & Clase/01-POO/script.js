/*
POO (PROGRAMACIÓN ORIENTADA A OBJETOS)
Las características de un objeto en JS se los denomina "propiedades" y a la capacidad de un objeto se los denomina "métodos".
La PROPIEDAD de un OBJETO sería como es, mientras que el MÉTODO sería que puede hacer.

Por ejemplo, un auto como "objeto":
Las propiedades sería:
- Tiene puertas
- Tiene ruedas
- Tiene ventanas
- Tiene motor

Los métodos:
- Arrancar
- Acelerar
- Frenar
- Girar

NOMENCLATURA DEL PUNTO:
Volviendo al ejemplo del auto la nomenclatura del punto sería:
Propiedad:

audi.color="red"; --► objeto.propiedad = "valor";

En programación esto se traduce com nombre del objeto, propiedad igual a valor.
En cuanto a los métodos:

audi.acelera(); --► objeto.método(zona de parámetros o argumentos);

Esto se traduce en nombre del objeto, método.
Todos los métodos al final llevan unos paréntesis que se conocen como zona de parámetros o argumentos.
*/

let miboton = document.getElementById("boton1");
let miboton2 = document.getElementById("boton2");
let miboton3 = document.getElementById("boton3");

miboton.style.width = "250px"; // propiedad
miboton.style.height = "250px";
miboton.style.background = "red";

miboton2.style.width = "250px"; // propiedad
miboton2.style.height = "250px";
miboton3.style.width = "250px";

miboton3.focus (); // método
miboton3.value = "Escriba aquí...";

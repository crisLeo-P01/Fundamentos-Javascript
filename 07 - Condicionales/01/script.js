let precioCoche = 60000;

alert ("El valor del auto es de: $" + precioCoche + " pesos.");

let dineroAhorrado = prompt ("Introduce cuanto tienes ahorrado");

//  var edad=prompt("Introduce tu edad por favor");

let loteria = prompt ("Te has ganado la lotería??");

//  if(dineroAhorrado>=precioCoche && edad>=18){
//    alert("Puedes comprar el coche");
//  }

if (dineroAhorrado >= precioCoche || loteria == "si") {
  alert ("Puedes comprar el coche");
}
else {
  alert ("No te alcanza para comprar el coche");
}

alert ("Continuamos con la ejecución del programa");

let num = 5;

if (num > 0) {
  console.log(`${num} es mayor a 0`); //Es lo mismo que una concatenación. alt+96
}
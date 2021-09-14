/* Una manera de definir una clase es mediante una declaración de clase. Para declarar una clase, se utiliza la
palabra reservada class y un nombre para la clase. */

class Jugador { // Por conversión es conveniente poner los nombres de las clases la primera letra en mayúsculas
  constructor(nombre, apellido, edad) {
    this.nombre = nombre; // this hace referencia al objeto. nombre del objeto = nombre del parámetro
    this.apellido = apellido;
    this.edad = edad;

    this.datos = `Me llamo ${nombre} y apellido ${apellido} y tengo ${edad} años.`;
  }

  saludar() { // Este método si va el this xq está por afuera del constructor
    return `Me llamo ${this.nombre} y apellido ${this.apellido} y tengo ${this.edad} años.`;
  }
}
/* Se le pueden asignar propiedades que no haya en los parámetros, pero siempre utilizando "this"
para hacer referencia al objeto */

/* Para crear un objeto utilizando la clase o plantilla se hace con la palabra reservada "new" y el nombre
de la calase que queremos utilizar */
const jugador = new Jugador('Lionel', 'Messi', 32);
const jugador2 = new Jugador('Cristiano', 'Ronaldo', 34);

/* Una vez INSTANCIADO el objeto podremos acceder a sus propiedades y métodos utilizando la nomenclatura del
punto o buscando su propiedad en el objeto. */
console.log(jugador.nombre);
console.log(jugador2.apellido);

console.log(jugador.saludar());
console.log(jugador2.saludar());

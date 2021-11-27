const mascota = {
  nombre: 'Lupe',
  edad: 3,
  caracteristicas: ['Hermosa', 'Color marron', 'Mimosa'],
};

/* La desestructuración de objetos es una característica útil de JavaScript para extraer
propiedades de objetos y enlazarlos a variables.
Lo que es mejor, la desestructuración de objetos puede extraer varias propiedades en una
instrucción, puede acceder a las propiedades de objetos anidados y
puede establecer un valor predeterminado si la propiedad no existe. */
const { nombre } = mascota; // Esto es un destructuring Objects
console.log(nombre);

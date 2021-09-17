/* eslint-disable guard-for-in */
const persona = { // objeto
  nombre: "Cristian", // índice: valor;
  edad: 34,
  dni: 31700716,
  sexo: "Masculino",
  deportesFavoritos: ["Fútbol", "Fórmula 1", "Tennis", "NBA", "UFC"],
};

console.log(persona.nombre);
console.log(`Nombre del usuario: ${persona.nombre}`); // console.log('Nombre del usuario: ' + persona.['nombre']);
console.log(`Edad del usuario: ${persona.edad}`);
console.log(`Los deportes favoritos del usuario son: ${persona.deportesFavoritos}`);

persona.nacionalidad = 'Argentina'; // Agregamos un nuevo indice con su valor para el objeto persona
console.log(persona.nacionalidad);

for (const key in persona) {
  console.log(key); // Recorremos los índices del objeto
}

for (const value in persona) {
  console.log(persona[value]); // Recorremos los valores del objeto
}

for (const depFav of persona.deportesFavoritos) {
  console.log(depFav); // Recorremos los valores de dichos indices
}

/* Si ponemos in en el bucle for nos recorre el índice del array. Para mostrar las claves
de dicha array hay que colocar "of" y de esa forma nos dara todos los valores que
contiene el array. */

// IMPRIMIENDO TODO EN UNA SOLA LÍNEA
console.log(`El nombre es ${persona.nombre} y una nacionalidad ${persona.nacionalidad}. Su edad es de ${persona.edad} años. Sus deportes favoritos son: ${persona.deportesFavoritos.join(", ")}`);

const persona = { //objeto
    nombre: "Cristian", // índice: valor;
    edad: 34,
    dni: 31700716,
    sexo: "Masculino",
    deportesFavoritos: ['Fútbol' , 'Fórmula 1' , 'Tennis', 'NBA', 'UFC'],
};

console.log('Nombre del usuario: ' + persona.nombre); //console.log('Nombre del usuario: ' + persona.[' nombre']);
console.log('Edad del usuario: ' + persona.edad);
console.log('Los deportes favoritos del usuario son: ' + persona.deportesFavoritos);

for(const z in persona) {
    console.log(z);
}

for(const i in persona) {
    console.log(persona[i]); //Recorremos los indices del objeto
}

for(const depFav in persona.deportesFavoritos) {
    console.log(depFav); // Recorremos los valores de dichos indices
}
/*Si ponemos in en el búcle for nos recorre el índice del array. Para mostrar las claves
de dicha array hay que colocar "of" y de esa forma nos dara todos los valores que
contiene el array.
*/

// IMPRIMIENDO TODO EN UNA SOLA LÍNEA
console.log(`El nombre es ${persona.nombre}. Su edad es de ${persona.edad} años. Sus deportes favoritos son: ${persona.deportesFavoritos.join(', ')}`);
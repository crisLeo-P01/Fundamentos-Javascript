
// FOR IN /////////////////////////////////////////////

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
for (let i in dias) {
	console.log (i);
}

/////////////////////////////////

let nombres = ["Cristian", "Male", "Emiliano", "Jesica", "Alejandro"];

for (let z in nombres) {
	if ( nombres[z] === "Emiliano" ) {
		break;
	}
	alert (nombres[z]);
}

// FOR OF /////////////////////////////////////////////

let numeros = [7, 13, 15, 32, 43, 107];
for (let numero of numeros) {
	console.log (numero)
}

/////////////////////////////////

// Palabras reservadas de blucles => BREAK & CONTINUE /////////////////////////////////////////////

//BREAK => rompe el bucle
//CONTINUE => se salta la(s) posiciones que le indiquemos y despúes continúa su ejecución

for (let dia in dias) {
	if (dias[dia] === 'Jueves'){
		break
	}
	console.log (dia)
}

for (let name of nombres) {
	if (name === 'Emiliano') {
		continue
	}
	console.log (name);
}


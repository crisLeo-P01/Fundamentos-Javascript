

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
for(let i in dias) {
	console.log(dias[i]);
}

/////////////////////////////////

let nombres = [ "Cristian", "Male", "Emiliano", "Jesica", "Alejandro" ];

for ( let z in nombres ) {
	if ( nombres[z] === "Emiliano" ) {
		break;
	}
	alert (nombres[z]);
}
let articulos = ["Zapatillas", "Camisetas", "Pantalon", "Calcetines"];

document.write ("<p> El primer articulo es <strong>" + articulos [0] + "</strong></p>");

document.write ("<p> El ultimo elemento es <strong>");
document.write (articulos[articulos.length-1] + "</strong></p>");

articulos.unshift ("Balón"); //AGREGA ELEMENTO AL PRINCIPIO
document.write ("<p>Casi nos olvidamos!!! Agregamos este articulo: <strong>");
document.write (articulos[0] + "</strong></p>");

document.write ("<p>Agreguemos un elemento más al final: <strong>");
articulos.push (prompt ("Introduce el articulo")); //AGREGA ELEMENTO AL FINAL
document.write (articulos[articulos.length-1] + "</strong></p>");

document.write ("<p>" + articulos[0] + "<br/>");
document.write (articulos[1] + "<br/>");
document.write (articulos[2] + "<br/>");
document.write (articulos[3] + "<br/>");
document.write (articulos[4] + "<br/>");
document.write (articulos[5] + "<br/></p>");

alert("Borraremos el primer elemento");
articulos.shift (); //El método shift borra el primer elemento
document.write ("<p>" + articulos[0] + "<br/>");
document.write (articulos[1] + "<br/>");
document.write (articulos[2] + "<br/>");
document.write (articulos[3] + "<br/>");
document.write (articulos[4] + "<br/></p>");

alert("Ahora borraremos el ultimo elemento");
articulos.pop (); //El método pop borra el último elemento
document.write ("<p>" + articulos[0] + "<br/>");
document.write (articulos[1] + "<br/>");
document.write (articulos[2] + "<br/>");
document.write (articulos[3] + "<br/></p>");
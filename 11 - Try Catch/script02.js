function color() {
  let colorWeb = prompt("Introduce un color de la lista. Rojo/Verde/Azul").toLowerCase();

  try {
    if (colorWeb !== "rojo" && colorWeb !== "verde" && colorWeb !== "azul") {
      throw "El color no esta contemplado";
    }

    if (colorWeb === "rojo") {
      cuerpo.style.background = "#ff354a";
    } else if (colorWeb === "verde") {
      cuerpo.style.background = "#51ff66";
    } else {
      cuerpo.style.background = "#2345ff";
    }
  } catch (e) {
    console.log("Error: " + e);
  }
}

let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");

suma.addEventListener("click", () => {
  let num1 = parseInt(prompt("Introduce el primer número"), 10);
  let num2 = parseInt(prompt("Introduce el segundo número"), 10);

  console.log(`La suma entre ${num1} y ${num2} es de ${num1 + num2}`);
});

resta.addEventListener("click", () => {
  let num1 = parseInt(prompt("Introduce el primer número"), 10);
  let num2 = parseInt(prompt("Introduce el segundo número"), 10);

  console.log(`La resta entre ${num1} y ${num2} es de ${num1 - num2}`);
});

multiplicacion.addEventListener("click", () => {
  let num1 = parseInt(prompt("Introduce el primer número"), 10);
  let num2 = parseInt(prompt("Introduce el segundo número"), 10);

  console.log(`La multiplicación entre ${num1} y ${num2} es de ${num1 * num2}`);
});

division.addEventListener("click", () => {
  let num1 = parseInt(prompt("Introduce el primer número"), 10);
  let num2 = parseInt(prompt("Introduce el segundo número"), 10);

  console.log(`La división entre ${num1} y ${num2} es de ${num1 / num2}`);
});

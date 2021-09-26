const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplicacion = document.getElementById('multiplicacion');
const division = document.getElementById('division');

suma.addEventListener('click', () => {
  const num1 = parseInt(prompt("Introduce el primer número"), 10);
  const num2 = parseInt(prompt("Introduce el segundo número"), 10);

  console.log(`La suma entre ${num1} y ${num2} es de ${num1 + num2}`);
});

resta.addEventListener("click", () => {
  const num1 = parseInt(prompt('Introduce el primer número'), 10);
  const num2 = parseInt(prompt("Introduce el segundo número"), 10);

  console.log(`La resta entre ${num1} y ${num2} es de ${num1 - num2}`);
});

multiplicacion.addEventListener("click", () => {
  const num1 = parseInt(prompt("Introduce el primer número"), 10);
  const num2 = parseInt(prompt("Introduce el segundo número"), 10);

  console.log(`La multiplicación entre ${num1} y ${num2} es de ${num1 * num2}`);
});

division.addEventListener("click", () => {
  const num1 = parseInt(prompt("Introduce el primer número"), 10);
  const num2 = parseInt(prompt("Introduce el segundo número"), 10);

  console.log(`La división entre ${num1} y ${num2} es de ${num1 / num2}`);
});

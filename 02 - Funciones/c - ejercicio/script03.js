let repetir = 'si';

const suma = (num1, num2) => console.log(`La suma es: ${num1 + num2}`);

const resta = (num1, num2) => console.log(`La resta es: ${num1 - num2}`);

const division = (num1, num2) => console.log(`La división es: ${num1 / num2}`);

const multiplicar = (num1, num2) => console.log(`La multiplicación es: ${num1 * num2}`);

do {
    // No hace falta que empiece desde la function ya que siempre va a estar ya memorizada por el navegador...
    const operacion = prompt("Que operación deseas realizar").toLowerCase();
    const operacion1 = parseInt(prompt("Introduce el primer n°"), 10);
    const operacion2 = parseInt(prompt("Introduce el segundo n°"), 10);

    if (operacion === 'suma') {
        suma(operacion1, operacion2);
    } else if (operacion === 'resta') {
        resta(operacion1, operacion2);
    } else if (operacion === 'division') {
        division(operacion1, operacion2);
    } else if (operacion === 'multiplicar') {
        multiplicar(operacion1, operacion2);
    } else {
        console.log('Lo siento. La operación no esta contemplada.');
    }

    repetir = prompt('¿Desea realizar otra operación?').toLowerCase();
} while (repetir === 'si');

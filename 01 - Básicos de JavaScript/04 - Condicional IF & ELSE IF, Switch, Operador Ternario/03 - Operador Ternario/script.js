let num = 5;
let num3 = 23;

// CON SOLO UNA SENTENCIA
(num % 2 === 0) ? console.log (`${num} es par`) : console.log (`${num} es impar`);

(num3 >= 18) ? document.write ("eres mayor") : document.write("Eres menor");

// if (num % 2 == 0) console.log(`${num} es par`);
// else console.log(`${num} es impar`);

let num2 = 8;

// CON MÚLTIPLES SENTENCIAS

(num2 % 2 === 0) ? 
    (
        console.log (`${num2} es par`),
        console.log (`${num2} es par 2`)
    ) : (
            console.log (`${num2} es impar`),
            console.log (`${num2} es par 2`)
        )

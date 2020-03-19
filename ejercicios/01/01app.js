/*
Ordenar 3 número de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 => 6 (factorial de 3)
abc => 123
acb => 132
bac => 213
bca => 231
cab => 312
cba => 321
*/

const number = document.getElementById('number');
const result = document.getElementById('result');

let a = parseInt(prompt('Introduce el primer número'));
let b = parseInt(prompt('Introduce el segundo número'));
let c = parseInt(prompt('Introduce el tercer número'));

number.textContent = `Los números intrdocucidos son el número a:${a}, b:${b}, y c:${c}`;
document.write('<br>');

if (a>b && a>c) {
	if (b>c) {
		result.textContent = `La forma ordenada de los números es a:${a}, b:${b} y c:${c}`;
	}
	if(b<c) {
		result.textContent = `La forma ordenada de los números es a:${a}, c:${c} y b:${b}`;
	}
}else if(b>a && b>c) {
	if(a>c) {
		result.textContent = `La forma ordenada de los números es b:${b}, a:${a} y c:${c}`;
	}
	else {
		result.textContent = `La forma ordenada de los números es b:${b}, c:${c} y a:${a}`;
	}
}else if(c>a && c>b) {
	if(a>b) {
		result.textContent = `La forma ordenada de los números es c:${c}, a:${a} y b:${b}`;
	}
	else {
		result.textContent = `La forma ordenada de los números es c:${c}, b:${b} y a:${a}`;
	}

}

else{
	result.textContent = `Se produjo un error`;
}
const form = document.getElementById('form');
const button = document.getElementById('submitButton');

const name = document.getElementById('name');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const terms = document.getElementById('terms');

const formInValid = {
    name: false,
    email: false,
    gender: false,
    terms: false,
};

form.addEventListener('submit', (e) => {
    e.preventDefault(); //Es para prevenir que el formulario sea enviado sin ningún dato o sin completar algún campo
    validateForm(); // Función que valide
});

name.addEventListener('change', (e) => { //El change hace que detecte cualquier cambio dentro del campo
    if(e.target.value.trim().length > 0) formInValid.name = true //trim() es para que no haya espacios en blanco
});

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formInValid.email = true
});

gender.addEventListener('change', (e) => {
    if(e.target.checked === true) formInValid.gender = true
});

terms.addEventListener('change', (e) => {
    formInValid.terms = e.target.checked; //Esto es que si el checked es true el formInValid es true y sino lo contrario
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true);
});

const validateForm = () => {
    const formValues = Object.values(formInValid); //Como el objeto no nos sirve lo convertimos en un array ára comprobar que no haya ningún false
    const valid = formValues.findIndex(value => value === false); //Esto lo que hace es buscar si hay algún false. Si por ej en la posición de email es es false no daría uno en la posición del array. Si da -1 es que email es true.
    if(valid === -1) form.submit(); //En caso que sea true con -1, enviará el formulario.
    else alert('Form Invalid');
};
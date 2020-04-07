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
    if(e.target.value.trim().length > 0) formInValid.name = true
});

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formInValid.email = true //trim() es para que no haya espacios en blanco
});

gender.addEventListener('change', (e) => {
    if(e.target.checked === true) formInValid.gender = true
});

terms.addEventListener('change', (e) => {
    formInValid.terms = e.target.checked;
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true);
});

const validateForm = () => {
    const formValues = Object.values(formInValid);
    const valid = formValues.findIndex(value => value === false);
    if(valid === -1) form.submit();
    else alert('Form Invalid');
};
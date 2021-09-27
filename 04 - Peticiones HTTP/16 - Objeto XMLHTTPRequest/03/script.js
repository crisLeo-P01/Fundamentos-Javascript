const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //De está forma se evita recargar la página
    sendData(form);
});

const sendData = (data) => {
    let xhr;
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open('POST', 'marvel.php');
    const formData = new FormData(data); // Está es una función que puede recibir parámetros
    xhr.send(formData);
};
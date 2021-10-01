const form = document.getElementById('form');

const sendData = (data) => {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'marvel.php');
  const formData = new FormData(data); // Está es una función que puede recibir parámetros
  xhr.send(formData);
};

form.addEventListener('submit', (e) => {
  e.preventDefault(); // De está forma se evita recargar la página
  sendData(form);
});

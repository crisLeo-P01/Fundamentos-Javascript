/*
  Fetch API
  Para hacer peticiones POST, fetch admite un segundo parámetro.
  fetch(url, {
    method: 'POST',
    body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
    headers: {
      cabeceras de información sobre lo que estamos enviando
      https://developer.mozilla.org/es/docs/Web/HTTP/Headers
    }
  })

  console.log(newPost)
  console.log(JSON.stringify(newPost))
*/

const button = document.getElementById('button');

button.addEventListener('click', () => {
  const newPost = {
    title: 'A new post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    userId: 1,
  };

  // Petición fetch
  /* Al igual que no podemos recibir un objeto, no podemos mandar un objeto,
  entonces lo que hay que hacer es convertir ese objeto en formato JSON
  para que la API lo pueda interpretar */
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: { // Las cabeceras son un objeto
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

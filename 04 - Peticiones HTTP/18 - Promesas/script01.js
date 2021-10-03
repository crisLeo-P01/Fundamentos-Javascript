// Una promesa es un objeto con DOS callbacks internos
const users = [
  {
    id: 1,
    name: 'Dorian',
  },
  {
    id: 2,
    name: 'Laura',
  },
  {
    id: 3,
    name: 'Carlos',
  },
];

const emails = [
  {
    id: 1,
    email: 'dorian@gmail.com',
  },
  {
    id: 2,
    email: 'laura@gmail.com',
  },
];

const getUser = (id) => {
  const user = users.find(user => user.id === id);
  // PROMESA
  // Así es como se declara una promesa. Se construye como un nuevo objeto.
  // Dentro del new Promise colocamos los callback que lleva el Promise de por si.
  // Lleva un RESOLVE, el cual se va a ejecutar cuando t/ vaya bien y REJECT se ejecutara cuando algo vaya mal
  const promise = new Promise((resolve, reject) => {
    if (!user) reject(`Doesn't exist an user with id ${id}`);
    else resolve(user);
  });
  return promise;
};

const getEmail = (user) => {
  const email = emails.find(email => email.id === user.id);
  return promise = new Promise((resolve, reject) => {
    if (!email) reject(`${user.name} hasn't email`);
    else resolve({
      id: user.id,
      name: user.name,
      email: email.email
    });
  });
};

// El método then() hace resolver el contenido de la promesa y catch en el caso que encuentre un error. Cuando se
// trabaja con promesas SIEMPRE debemos colocar el catch para manejar los errores.
// Lo que hace el getUser internamente

getUser(3)
  .then(user => getEmail(user))
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Una forma abreviada para devolver la promesa
getUser(2)
  .then(getEmail)
  .then(console.log)
  .catch(console.log);

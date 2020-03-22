/*
Async / await es una implementación para hacer funciones asíncronas
en Javascript de forma nativa.
 */

const getName = async () => { //estamos construyendo una función asíncrona
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Cristian')
    }, 1500);
  })
};

const sayHello = async () => {
  const name = await getName();
  return `Hello ${name}`;
};

sayHello().then(res => console.log(res));
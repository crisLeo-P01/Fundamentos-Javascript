/* Async / await es una implementación para hacer funciones asíncronas
en Javascript de forma nativa.
El async await funciona a través de promesas */

const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }];
const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }];

const getUser = async (id) => { // Al escribir async ya estamos devolviendo una promesa.
    const user = users.find((user) => user.id === id);
    /* Lanzando un nuevo error con throw new Error, en el cual, el
    new Error es un constructor que construye un objeto error y se le pasa
    el mensaje de error.
    Throw es una excepción o un error */
    if (!user) throw new Error(`Doesn't exist an user with id ${id}`);
    else return (user);
};

const getEmail = async (user) => {
    const email = emails.find((email) => email.id === user.id);
    if (!email) throw new Error(`${user.name} hasn't email`);
    else {
        return ({
            id: user.id,
            name: user.name,
            email: email.email,
        });
    }
};

const getInfo = async (id) => {
    /* La declaración try...catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se
    produce una excepción (catch). */
    try {
        const user = await getUser(id);
        const res = await getEmail(user);
        return `${user.name} email is ${res.email}`;
    } catch (e) {
        console.log(e);
    }
};

getInfo(1).then((res) => console.log(res));

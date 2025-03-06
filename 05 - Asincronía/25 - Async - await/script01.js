// Asymc await funcionan a través de promesas

const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cristian');
        }, 1500)
    });
};

const sayHello = async () => {
    const name = await getName();
    return `Hola ${name}`;
};

sayHello().then((res) => console.log(res));

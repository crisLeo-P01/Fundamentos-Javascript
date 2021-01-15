
/*
AJAX
Ajax es asíncrono. Pero que significa eso?
Normalmente cuando hacemos una petición y esperamos una respuesta, el navegador se queda esperando y hasta que no recibimos
todos los datos, pues no carga la página. Esto pasa por ejemplo que cuando esperamos que cargue una página, este no se muestra
hasta que no este cargada en su totalidad. Con AJAX conseguimos que se cargue la página y todos los datos que hagamos como
petición al servidor lleguen más tarde porque normalmente cuando hacemos una petición con AJAX, estamos haciendo una consulta
a una base de datos o estamos haciendo una consulta a una API que nos devuelve una serie de datos, pues si se piden muchos datos
es posible que la petición tarde y sobre t/ si tenemos una conexión de internet baja. Entonces lo que logra AJAX es que la página
trabaje de forma asíncrona. Eso significa que no esta sincronizada con la página. Es decir, que la página va por un lado y las peticiones
y los datos, van por otro.

 */

/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.getElementById('button');

button.addEventListener('click', () => {
    let xhr = new XMLHttpRequest(); // Objeto que va a guardar nuestra información

    // Para internet Explore por de bajo de la versión 11
    // if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
    // else xhr = new ActiveXObject("Microsoft.XMLHTTP");
    //////////

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => { //Cuando la información ha llegado, en el cual load se dispara cuando t/ la información llego al objeto. Una vez llegada esa información se guarda en data.
        const dataJSON = JSON.parse(data.target.response); //El JSON.parse se debe a que cuando llega la información llega en formato string y eso no es lo que queremos. Al colocar esto convertimos ese string en un formato JSON, o sea, en objeto.

        //Imprimiendo en pantalla
        const list = document.getElementById('list');
        for(const userInfo of dataJSON) {
            const listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            list.appendChild(listItem)
        }
    });

    xhr.send() //Enviando la información
});
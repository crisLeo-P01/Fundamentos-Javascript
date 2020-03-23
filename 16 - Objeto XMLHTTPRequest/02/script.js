const form = document.getElementById('form');
const characters = document.getElementById('characters');
const table = document.getElementById('table');

//Esto es cuando llamamos a la función y presionamos en el button GET DATA
form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData(characters.children[characters.selectedIndex].value);
});

const getData = (id) => {
    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); //Para navegadores actuales y e inclusive para IE 11
    else xhr = new ActiveXObject("Microsoft.XMLHTTP"); // Para IE anteriores a ie 11

    if (id == undefined) { //Tenemos que preguntar si ID existe para ver si estamos cargando por primera vez la página o no
        xhr.open('GET', 'marvel.php'); //Si el ID es undefined, significa que no estamos haciendo una solicitud desde el formulario, sino que estamos cargando la página por primera vez

        //Una vez que lo tenemos, tenemos que escuchar la respuesta para saber que los datos ya lo tenemos
        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response); // Convertimos ese dato en formato JSON
            console.log(dataJSON);

            //Creamos el fragmento de código que a cada vuelta de bucle, rellene nuestro select
            const fragment = document.createDocumentFragment();
            for (const heroes of dataJSON) {
                const option = document.createElement('OPTION');
                option.setAttribute('value', heroes.ID);
                option.textContent = heroes.Name;
                fragment.appendChild(option);
            }

            characters.appendChild(fragment);
        })
    } else { // Si está definido significa que hemos presionado el button de GET DATA y le estamos enviando un ID
        xhr.open('GET', `marvel.php?id=${id}`); // PHP necesita del ID que le estamos pasando

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON);

            const fragment = document.createDocumentFragment();

            for (const heroe of dataJSON) {
                //Creamos la fila del heroe para sus distintos campos
                const row = document.createElement('TR');
                const dataName = document.createElement('TD');
                const dataAlignment = document.createElement('TD');
                const dataHometown = document.createElement('TD');
                const dataGender = document.createElement('TD');
                const dataFighting = document.createElement('TD');
                //Lo que va a contener esos campos que esta relacionado con la BD
                dataName.textContent = heroe.Name;
                dataAlignment.textContent = heroe.Alignment;
                dataHometown.textContent = heroe.Hometown;
                dataGender.textContent = heroe.Gender;
                dataFighting.textContent = heroe.Fighting_Skills;

                //Y agregamos los hijos
                row.append(dataName);
                row.append(dataAlignment);
                row.append(dataHometown);
                row.append(dataGender);
                row.append(dataFighting);

                //Añadimos una fila
                fragment.append(row)
            }

            //Borramos el los datos del héroe seleccionado cuando seleccionamos un nuevo héroe
            if (table.children[1]) { // Es [1] xq en la posición 0 se encuentra la fila de los detalles del héroe
                table.removeChild(table.children[1])
            }
            table.append(fragment)
        })
    }

    xhr.send()
};

getData();
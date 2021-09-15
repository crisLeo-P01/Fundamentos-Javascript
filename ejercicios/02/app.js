/*
✔- Crea una clase Libro
✔- La clase libro tendrá título, autor, año y género.
✔- Crea un método que devuelva toda la información del libro.
✔- Pide 3 libros y guárdalos en un array
✔- Los libros se introducirán al arrancar el programa pidiendo los datos con
prompt.
✔- Validar que los campos no se introduzcan vacíos.
✔- Validar que el año sea un número y que tenga 4 dígitos.
✔- Validar que el género sea: aventuras, terror o fantasía
✔- Crea una función que muestre todos los libros
✔- Crea una función que muestre los autores ordenados alfabéticamente
- Crea una función que pida un género y muestre la información de los libros que
pertenezcan a ese género usando el método que devuelve la información
*/

class Libro {
  constructor(titulo, autor, anio, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.genero = genero;
  }

  getAutor() {
    return this.autor;
  }

  getGeneros() {
    return this.genero;
  }

  info() {
    return `El título del libro es ${this.titulo} del autor ${this.autor}. Es del año ${this.anio}. Su género es ${this.genero}.`;
  }
}

let iLibro;
let iAutor;
let iAnio;
let iGenero;
let ingresarLibro = "si";
let books = [];

do {
  iLibro = prompt("Introduzca el título del libro");
  while (iLibro === "") {
    iLibro = prompt("Por favor, introduzca el nombre del libro");
  }

  iAutor = prompt("¿De quién pertenece dicho libro?");
  while (iAutor === "") {
    iAutor = prompt("Por favor, introduzca un nombre");
  }

  iAnio = parseInt(prompt("Introduzca el año del libro"), 10);
  while (iAnio <= 0 || iAnio > 2021) {
    iAnio = parseInt(prompt("Por favor, introduzca una fecha válida"), 10);
  }

  iGenero = prompt("introduce el género del libro. Deben ser de genero => Aventuras, terror o fantasía").toLowerCase();
  while (iGenero === "" || (iGenero !== "aventuras" && iGenero !== "aventura" && iGenero !== "terror" && iGenero !== "fantasía" && iGenero !== "fantasia")) {
    iGenero = prompt("Por favor, introduzca un nombre. Las opciones son => Aventuras, terror o fantasía");
  }

  ingresarLibro = prompt("¿Desea ingresar un nuevo libro?");

  books.push(new Libro(iLibro, iAutor, iAnio, iGenero));
} while (ingresarLibro === "si");

console.log(books);

const mostrarAutores = () => {
  let authors = [];
  for (const book of books) {
    authors.push(book.getAutor());
  }
  console.log(authors.sort());
};

mostrarAutores();

// PEDIRA QUE GÉNERO QUEREMOS MOSTRAR
const mostrarGeneros = () => {
  const gender = prompt("Introduce el género a buscar");
  for (const book of books) {
    if (book.getGeneros() === gender) {
      console.log(book.info());
    }
  }
};

mostrarGeneros();

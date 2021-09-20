const mascotas = {
  perros: {
    raza: "Doberman",
    color: "Negro",
  },
  gatos: {
    raza: 'Egito',
    color: 'Blanco',
    gatoMacho: {
      altura: 0.57,
    },
    gatoHembra: {
      altura: 0.40,
    },
  },
};

console.log(mascotas);

const gatoRaza = mascotas.gatos.raza; // De forma de la que se hacia

console.log(gatoRaza);

const { raza, color } = mascotas.gatos; // Destructuring objects

console.log(raza);
console.log(color);

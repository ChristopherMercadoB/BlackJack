// 2C
// 2D
// 2H
// 2S

let stock = [];
let newStock = [];

const crearDeck = () => {
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      stock.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let especial of especiales) {
      stock.push(especial + tipo);
    }
  }
};

if (stock === null || stock.length <= 0) {
  crearDeck();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffle(stock);

console.log(stock);

const pedirCarta = () => {
  if (stock.length === 0) {
    throw "No hay cartas";
  }
  const carta = stock.pop();
  console.log(stock);
  console.log(carta);
  return carta;
};

const valorCarta = (carta) => {
  let puntos = 0;
  const value = carta.substring(0, carta.length - 1);

  if (isNaN(value)) {
    console.log("No es un numero");
    puntos = value === 'A' ? 11 : 10
    console.log(puntos)
  } else {
    puntos = parseInt(value)
    console.log({ puntos });
  }
};

valorCarta("JD");

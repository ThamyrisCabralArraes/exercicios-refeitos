console.log('.......');
// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// espalha o array items e adiciona o elemento 'Meia'
const newItems = [...items, 'Meia'];
console.log(newItems);

console.log('.......');
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

console.log('.......');
const product = {
  id: 1,
  name: 'Camiseta',
};

const newProduct = { ...product, price: 23 };

console.log('.......');
const product2 = [
  {
    id: 1,
    name: 'Camiseta',
  },
  {
    id: 2,
    name: 'Camiseta',
  },
  {
    id: 1,
    name: 'Camiseta',
  },
];

const productPrice = {
  price: 23,
};

const newProduct2 = { ...product2, ...productPrice };

const [{ id }, { name }] = product2;

const bla = {
  id,
  name,
};
console.log(bla);
console.log('.......');

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['1- hamburguer', '3- pizza', '2- temaki'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['6- tapioca', '5- torta de ninho', '4- pastel'];

const fruitSalad = (fruit, additional) => {
  const favoritefood = [...fruit, ...additional];
  return favoritefood.sort();
};

console.log(fruitSalad(specialFruit, additionalItens));

console.log('.......');

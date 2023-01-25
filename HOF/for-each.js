// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//   console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });

// console.log('......');
// const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

// pessoasAprovadas.forEach((_, index) => {
//   pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
// });

// console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']

// console.log('......');
// const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers2.forEach((element) => console.log(element * 2));
// console.log('......');
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multiply = (element) => {
//   console.log(element * 2);
// };

// numbers.forEach(multiply);

console.log('......');

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const resulEmail = (email) =>
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);

const lista = emailListInData.forEach((item) => resulEmail(item));

console.log('......');

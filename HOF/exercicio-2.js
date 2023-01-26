const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

console.log('exercicio1');

const authorBornIn1947 = () => {
  console.log(books.find((item) => item.author.birthYear === 1947));
};
authorBornIn1947();

console.log('exercicio2');

const smallerName = () => {
  let nameBook = books.find((book) => true).name;
  books.forEach((item) => (item.name.length < nameBook.length ? (nameBook = item.name) : ''));

  console.log(nameBook);
};
smallerName();

console.log('exercicio3');

const getNamedBook = () => {
  return books.find((item) => item.name.length === 26);
};
console.log(getNamedBook());

console.log('exercicio4');

function everyoneWasBornOnSecXX() {
  return books.every((item) => item.author.birthYear > 1901 && item.author.birthYear < 2000);
}
console.log(everyoneWasBornOnSecXX());

console.log('exercicio5');

const someBookWasReleaseOnThe80s = () => {
  return books.some((item) => item.releaseYear > 1980 && item.releaseYear < 1990);
};
console.log(someBookWasReleaseOnThe80s());

console.log('exercicio5');

const authorUnique = () => {
  const age = books.map((item) => item.author.birthYear);
  console.log(age);

  return age.reduce((acc, curr) => (acc === curr ? false : false), {});
};
console.log(authorUnique());

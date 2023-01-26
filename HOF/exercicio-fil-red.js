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
console.log('.......');
console.log(books.filter((item) => item.genre === 'Ficção Científica'));

console.log('exercicio2');
console.log('.......');
const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => currentYear - book.releaseYear >= 60)
    .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
};

console.log(oldBooksOrdered());

console.log('exercicio3');
console.log('.......');

const booksByAuthorBirthYear = (birthYear) => {
  return books.filter((item) => item.author.birthYear === birthYear).map((item) => item.name);
};
const result = booksByAuthorBirthYear(1920);
console.log(result);

console.log('exercicio4');
console.log('.......');

console.log(
  books
    .filter((item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica')
    .map((item) => item.author.name),
);

console.log('exercicio5');
console.log('.......');

const oldBooks = () => {
  const currentYear = new Date().getFullYear();
  return books.filter((item) => currentYear - item.releaseYear > 60).map((item) => item.name);
};
console.log(oldBooks());

console.log('exercicio6');
console.log('.......');

const authorWith3DotsOnName = () => {
  return books
    .filter(
      (item) =>
        item.author.name.split(' ')[0].length === 2 &&
        item.author.name.split(' ')[1].length === 2 &&
        item.author.name.split(' ')[2].length === 2,
    )
    .map((item) => item.name);
};
console.log(authorWith3DotsOnName());

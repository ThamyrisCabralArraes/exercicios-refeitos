const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

console.log(idades.find((idade) => idade < 20));
console.log(idades.find((idade) => idade > 20));

console.log('......');

const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((div) => div % 3 === 0 && div % 5 === 0));

console.log('......');

const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((name) => name.length === 5));

console.log('......');

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((musica) => musica.id === '31031687'));

console.log('......');

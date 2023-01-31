console.log('exercicio1');

const myList = [5, 2, 3];
const swap = ([n1, n2, n3]) => [n3, n2, n1];
console.log(swap(myList));

console.log('exercicio2');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (palio, shelbyCobra, chiron) => ({
  palio,
  shelbyCobra,
  chiron,
});
console.log(toObject(palio, shelbyCobra, chiron));

console.log('exercicio3');
const greet = (nome, cumprimento = 'Hi') => `${cumprimento} ${nome}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

console.log('exercicio4');

const student1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
};

const student2 = {
  name: `Vitor`,
  age: 20,
};

const getLastName = (student) => {
  const { lastName = 'lastName não preenchido' } = student;
  return lastName;
};

console.log(getLastName(student1));
console.log(getLastName(student2));

console.log('....');
const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

const [student0, [student22, student3], [student4, student5]] = moreStudents;

console.log(student0, student22, student3, student4, student5);

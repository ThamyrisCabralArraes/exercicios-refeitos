const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade.toLowerCase() === 'aprovado');

console.log(verifyGrades);

console.log('......');

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

verifyAges = (arr, minAge) => {
  return arr.every((person) => person.age >= minAge);
};

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));

console.log('......');
console.log('......');

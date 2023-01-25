const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade.toLowerCase() === 'aprovado');

console.log(verifyGrades);

console.log('......');

console.log('......');
console.log('......');

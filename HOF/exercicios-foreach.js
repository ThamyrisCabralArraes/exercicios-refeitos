console.log('1......');

const transfEmail = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (transfEmail) => {
  const employees = {
    id1: transfEmail('Pedro Guerra'),
    id2: transfEmail('Luiza Drumond'),
    id3: transfEmail('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(transfEmail));

console.log('2......');

const numeroEscolhido = 1;

const numeroSorteado = Math.floor(Math.random() * (5 - 1) + 1);
console.log(numeroSorteado);
if (numeroEscolhido === numeroSorteado) {
  console.log('Parabéns, você ganhou');
} else {
  console.log('Tente novamente');
}

console.log('3......');

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (ra, sa) => {
  let total = 0;
  ra.forEach((respostas, index) => {
    if (respostas === sa[index]) {
      total += 1;
    } else if (respostas !== sa[index] && sa[index] !== 'N.A') {
      total -= 0.5;
    }
  });
  return `Resultado final ${total} pontos`;
};

const respostas = result(RIGHT_ANSWERS, STUDENT_ANSWERS);
console.log(respostas);

console.log('4......');

console.log('5......');
console.log('6......');

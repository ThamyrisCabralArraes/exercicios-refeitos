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
console.log('3......');
console.log('4......');
console.log('5......');
console.log('6......');

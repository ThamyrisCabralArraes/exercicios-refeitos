const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

console.log('........');
// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

const {
  name: nameN,
  age,
  description: { specieName, jedi },
  homeWorld: { name: planeta, population },
} = character;
console.log(nameN);
console.log(age);
console.log(jedi);
console.log(planeta);
console.log(specieName);
console.log(population);

console.log('........');

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log('........');

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: turma, c: materia } = student;
console.log(nome);
console.log(turma);
console.log(materia);

console.log('........');

const product3 = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product3);

console.log('.......');

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const juntinhos = { ...user, ...jobInfos };
console.log(juntinhos);

const { name: nomes, age: idade, nationality, profession, squad, squadInitials } = juntinhos;

console.log(
  `Hi, my name is ${nomes}, I'm ${idade} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`,
);

console.log('.......');

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

console.log('.......');
const primeNumbers = [17, 23, 37];
const [n0, n1, n2] = primeNumbers;
const sum = (a, b) => {
  console.log(a + b);
};

sum(n0, n2);

console.log('......');

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

console.log('....');
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
let bla = numerosPares.filter((num) => num % 2 === 0);
[numerosPares] = [bla];

console.log(numerosPares); // [6, 8, 10, 12];
console.log('.....');
let numerosPares2 = [1, 3, 5, 6, 8, 10, 12];

[, , , ...numerosPares2] = numerosPares2;

console.log(numerosPares2); // [6, 8, 10, 12];

console.log('....');
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality);
console.log(person);

console.log('.....');

const getNationality = ({ firstName, nationality = 'Brazilian' }) =>
  `${firstName} is ${nationality}`;

const person2 = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person2));

console.log('....');

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

console.log('....');

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

console.log('....');
const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); // Welcome pessoa usuária!

console.log('....');
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));

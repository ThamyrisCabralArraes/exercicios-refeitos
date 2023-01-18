const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

customer1.lastName = 'Carlos';
customer2['lastName'] = 'Jose';

let newProp = 'hobbie';
const newValor = 'Comer';

const newObg = (obg, prop, valor) => {
  obg[prop] = valor;
};

newObg(customer1, newProp, newValor);

newProp = 'FullName';
const fullName = `${customer1.firstName} ${customer1.lastName}`;

newObg(customer1, newProp, fullName);

console.log(customer1);

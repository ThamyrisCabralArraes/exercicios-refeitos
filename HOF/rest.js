const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60));

console.log('.......');

const namees = (...args) =>
  args.reduce((accumulator, current, index) => [(accumulator += ` ${current}, `)], '');
console.log(namees('bla', 'car', 'tac', 1));

console.log('.......');

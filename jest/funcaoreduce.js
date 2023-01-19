const arr = [10, 20, 30, 40];
const lista = (arr) => {
  return arr.filter((item) => item < 20);
};

const sumOdd = (numbers) => {
  if (numbers.every((number) => number % 2 !== 0)) {
    return 0;
  }
  return numbers.filter((item) => item % 2 === 0).reduce((acc, curr) => acc + curr);
};

module.exports = { lista, sumOdd };

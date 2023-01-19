const { lista, sumOdd } = require('./funcaoreduce');

describe('testar funcao listaNumeros', () => {
  it('lista de numeros tem os numeros ', () => {
    expect(lista([10, 19, 20, 40])).toEqual([10, 19]);
  });
});

describe('testar funcao sumOdd', () => {
  it('receber so numeros pares', () => {
    expect(sumOdd([2, 4, 6, 8])).toEqual(20);
  });
  it('se receber numeros impares e pares', () => {
    expect(sumOdd([2, 3, 4, 5])).toBe(6);
  });
  it('se só receber numeros impares', () => {
    expect(sumOdd([3, 5, 7])).toEqual(0);
  });
});

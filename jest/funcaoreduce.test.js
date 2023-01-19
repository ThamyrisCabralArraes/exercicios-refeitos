const { lista, sumOdd, spreedfuncao, fruitSalad } = require('./funcaoreduce');

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

describe('testar funcao spreed', () => {
  const spree = {
    id: 1,
    name: 'thamyris',
  };

  it('se spreed funcao existe', () => {
    expect(typeof spreedfuncao).toBe('function');
  });
  it('se spreed function retorna o objto', () => {
    expect(spreedfuncao({ ...spree })).toEqual({ id: 1, name: 'thamyris' });
  });
  it('receber a spreed e um novo valor', () => {
    expect(
      spreedfuncao({
        id: 1,
        name: 'thamyris',
      }),
    ).toEqual({
      id: 1,
      name: 'thamyris',
    });
  });
});

describe('testar funcao fruitSalad', () => {
  it('se fruitSalad receber 2 valores', () => {
    expect(fruitSalad([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});

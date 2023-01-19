const { sum, arr, multiply, subtract } = require('./sum');

describe('testa função multiply', () => {
  test('sums two values', () => {
    expect(sum(4, 1)).toEqual(5);
  });

  test('array menor que 5', () => {
    expect(arr([2, 1, 4, 5])).toEqual(true);
  });
});

describe('testa multiplicacao', () => {
  it('mutiplicando numeros positivos', () => {
    expect(multiply(2, 3)).toEqual(6);
  });
  it('mutiplicando numeros negativos', () => {
    expect(multiply(2, -3)).toBe(-6);
  });
});

describe('testa subtração', () => {
  it('subtraindo numeros positivos', () => {
    expect(subtract(5, 2)).toBe(3);
  });
  it('subtraindo numeros negativos', () => {
    expect(subtract(5, 9)).toBe(-4);
  });
});

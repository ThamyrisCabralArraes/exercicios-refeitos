const { myFizzBuzz } = require('./fizzbuzz');

describe('testes na funcao FizzBuzz', () => {
  it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('Execute a função myFizzBuzz(num), sendo num um número divisível por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('Execute a função myFizzBuzz(num), sendo num um número não divisível por 5 e 3', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número', () => {
    expect(myFizzBuzz('2')).toBe(false);
  });
});

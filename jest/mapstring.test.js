const { encode, decode } = require('./mapstring');

describe('Para as funções encode e decode, crie os seguintes testes em Jest', () => {
  it('Teste se encode são funções', () => {
    expect(typeof encode).toBe('function');
  });
  it('Teste se decode são funções', () => {
    expect(typeof decode).toBe('function');
  });
  it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Teste se as demais letras não são convertidos para cada caso', () => {
    expect(encode('abcd')).toBe('1bcd');
  });
  it('Teste se os demais números não são convertidos para cada caso', () => {
    expect(decode('198')).toBe('a98');
  });
  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('abc').length).toBe(3);
  });
});

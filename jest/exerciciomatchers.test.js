const { sum, info, printMessage } = require('./exerciciomatchers');

describe('a função sum', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(5, 4)).toBe(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são number 4 e string ¨5¨', () => {
    expect(() => {
      sum();
    }).toThrow();
  });
  it('Teste se a mensagem de erro é -parameters must be numbers- quando realizar a chamada sum(4, ¨5¨)', () => {
    expect(() => {
      sum();
    }).toThrow(new Error('parameters must be numbers'));
  });
});

describe('a função printMessage', () => {
  it('objeto passado como parâmetro possui a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('Verifique se a resposta contém a informação Boas vindas,', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
  });
  it('Verifique se a resposta contém o nome correto da personagem', () => {
    expect(printMessage(info)).toMatch(info.personagem);
  });
  it('teste se chama um erro', () => {
    expect(() => {
      printMessage();
    }).toThrow();
  });
  it('teste se a frase do erro eh objeto inválido', () => {
    expect(() => {
      printMessage();
    }).toThrow(new Error('objeto inválido'));
  });
});

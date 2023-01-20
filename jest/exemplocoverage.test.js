const createItem = require('./exemploCoverage');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('Thamyris', 'TV', 1000, 1)).toEqual({
      name: 'Thamyris',
      quantity: 1,
      unit: 'TV',
      price: 1000,
    });
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('Thamyris', 'TV', 1000)).toEqual({
      name: 'Thamyris',
      quantity: 0,
      unit: 'TV',
      price: 1000,
    });
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => {
      createItem();
    }).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {
      createItem(1, 'TV', 1000, 1);
    }).toThrow(new Error('O nome do item deve ser uma string'));
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => {
      createItem('Thamyris', 'TV', -1, 1);
    }).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => {
      createItem('Thamyris', 'TV', 0, 1);
    }).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
});

const { searchEmployee, professionalBoard, error } = require('./bonus');

describe('testar funcáo searchEmployee', () => {
  it('funcao searchEmployee existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('a funcao retorne Linda', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });
  it('a funcao retorne Backend', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
  it('veja se a funcao tem um erro', () => {
    expect(() => {
      searchEmployee();
    }).toThrow();
  });
  it('veja se a funcao quando o ID nao existir retorne ID não identificada', () => {
    expect(() => {
      searchEmployee('1256', 'firstName');
    }).toThrow(new Error('ID não identificada'));
  });
  it('veja se a funcao quando o detail nao existir retorne Informação indisponível', () => {
    expect(() => {
      searchEmployee('1256-4', 'firstNamee');
    }).toThrow(new Error('Informação indisponível'));
  });
  it.todo('utiliza zero comoquantidade padrão');
});

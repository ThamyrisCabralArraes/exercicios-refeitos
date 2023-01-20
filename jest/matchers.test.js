const createUser = (firstName, lastName) => {
  const user = {
    email: (firstName + '_' + lastName + '@example.com').toLowerCase(),
    password: Math.floor(Math.random() * 100000000),
  };
  return user;
};

describe('testa createUser', () => {
  test('Cria email e senha', () => {
    const user = createUser('Mona', 'Lisa');
    expect(user).toHaveProperty('email', 'mona_lisa@example.com');
    expect(user).toHaveProperty('password');
  });
});

//

const skills = ['HTML', 'CSS', 'JavaScript'];

const addNewSkill = (newSkill) => {
  skills.push(newSkill);
};

describe('testa addNewSkill ', () => {
  test('Adiciona Jest na lista de habilidades', () => {
    const previousLength = skills.length;
    addNewSkill('Jest');
    expect(skills).toContain('Jest');
    expect(skills).toHaveLength(previousLength + 1);
  });
});

//
const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido');
  }
  return number * 2;
};
multiplyByTwo(4);

describe('testando erro', () => {
  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => {
      multiplyByTwo();
    }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => {
      multiplyByTwo();
    }).toThrow(new Error('number é indefinido'));
  });
});

//
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

describe('testando weekDays', () => {
  test('Sunday is a week day', () => {
    expect(weekDays).toContain('Sunday');
  });

  test('Sunday is not a workday', () => {
    expect(workDays).not.toContain('Sunday');
  });
});

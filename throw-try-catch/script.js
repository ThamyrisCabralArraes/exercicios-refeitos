const verifity = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Erro: não é um numero');
  }
};

const sum = (n1, n2) => {
  try {
    verifity(n1, n2);
    return n1 + n2;
  } catch (erro) {
    return erro.message;
  }
};

console.log(sum(2, '2'));

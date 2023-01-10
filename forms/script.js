const bntEnviar = document.getElementById('button-forms');
const btnReset = document.getElementById('button-reset');
const checkboxImg = document.getElementById('checkbox-imagem');
const inputName = document.getElementById('input-name');
const inputemail = document.getElementById('input-email');
const finalMessage = document.getElementById('final-message');

//funcoes
const defaultBntEnviar = (e) => {
  console.log(inputName.value.length);
  if (
    inputName.value.length < 10 ||
    inputName.value.length > 40 ||
    inputemail.value.length < 10 ||
    inputemail.value.length > 50
  ) {
    finalMessage.textContent = 'Dados Inválidos';
  } else {
    finalMessage.textContent =
      'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.';
  }

  e.preventDefault();
};

const resetBoard = () => {
  finalMessage.textContent = '';
};

const habilitateBnt = () => {
  bntEnviar.disabled = !checkboxImg.checked;
};

bntEnviar.addEventListener('click', defaultBntEnviar);
checkboxImg.addEventListener('change', habilitateBnt);
btnReset.addEventListener('click', resetBoard);

window.onload = () => {};

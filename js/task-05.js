const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

const handleInputChange = event => {
  textOutput.textContent = event.target.value;

  if (textInput.value === '') {
    textOutput.textContent = 'Anonymous';
  }
};

textInput.addEventListener('input', handleInputChange);

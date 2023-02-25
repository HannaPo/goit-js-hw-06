const textInput = document.querySelector('#validation-input');

const inputLength = Number(textInput.getAttribute('data-length'));

const handleInputValid = event => {
  if (event.target.value.length === inputLength) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else if (event.target.value.length === 0) {
    textInput.classList.remove('invalid');
    textInput.classList.remove('valid');
  } else {
    textInput.classList.add('invalid');
  }
};

textInput.addEventListener('blur', handleInputValid);

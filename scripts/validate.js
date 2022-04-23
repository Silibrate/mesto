const checkInputValidity = (input) => {
  input.setCustomValidity('');
  console.log(input.validity);
  if (input.validity.valueMissing) {
    input.setCustomValidity(ERRORS.empty)
    return false;
  }
  if (input.validity.typeMismatch && input.type === 'url') {
    input.setCustomValidity(ERRORS.wrongUrl)
    return false;
  }
  return input.checkValidity();
}

const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`.${input.id}-error`);
  checkInputValidity(input);
  errorElement.textContent = input.validationMessage;
}

const setButtonState = (button, isValid) => {
  if (isValid) {
    button.disabled = false;
    button.classList.remove('popup__button_disabled');
  } else {
    button.disabled = true;
    button.classList.add('popup__button_disabled');
  }
}

const handleInput = (event) => {
  const currentForm = event.currentTarget;
  const input = event.target;
  const submitButton = currentForm.querySelector('.popup__button');
  validateInput(input);
  setButtonState(submitButton, currentForm.checkValidity());
  if (input.validationMessage) {
    input.classList.add('popup__input-name_error');
  } else {
    input.classList.remove('popup__input-name_error');
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  const currentForm = event.target
  if (currentForm.checkValidity()) {
    currentForm.reset();
  }
}

editUserForm.addEventListener('submit', handleSubmit);
createCardForm.addEventListener('submit', handleSubmit);

editUserForm.addEventListener('input', handleInput);
createCardForm.addEventListener('input', handleInput);

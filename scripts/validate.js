const selectorsValid = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-name_error',
};

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

const setButtonState = (button, isValid,config) => {
  if (isValid) {
    button.disabled = false;
    button.classList.remove(config.inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(config.inactiveButtonClass);
  }
}

const handleInput = (event,config) => {
  const currentForm = event.currentTarget;
  const input = event.target;
  const submitButton = currentForm.querySelector(config.submitButtonSelector);
  validateInput(input);
  setButtonState(submitButton, currentForm.checkValidity(),config);
  if (input.validationMessage) {
    input.classList.add(config.inputErrorClass);
  } else {
    input.classList.remove(config.inputErrorClass);
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  const currentForm = event.target
  if (currentForm.checkValidity()) {
    currentForm.reset();
  }
}



const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((formElement) => {
      formElement.addEventListener('submit', handleSubmit);
      formElement.addEventListener('input', (evt) => handleInput(evt, config));
  })
}

enableValidation(selectorsValid);


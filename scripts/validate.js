const selectorsValid = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-name',
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

const setButtonState = (button, isValid,selectorsValid) => {
  if (isValid) {
    button.disabled = false;
    button.classList.remove(selectorsValid.inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(selectorsValid.inactiveButtonClass);
  }
}

const handleInput = (event) => {
  const currentForm = event.currentTarget;
  const input = event.target;
  const submitButton = currentForm.querySelector(selectorsValid.submitButtonSelector);
  validateInput(input);
  setButtonState(submitButton, currentForm.checkValidity(),selectorsValid);
  if (input.validationMessage) {
    input.classList.add(selectorsValid.inputErrorClass);
  } else {
    input.classList.remove(selectorsValid.inputErrorClass);
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  const currentForm = event.target
  if (currentForm.checkValidity()) {
    currentForm.reset();
  }
}

const enableValidation = (formSelector) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', handleSubmit);
    formElement.addEventListener('input', handleInput);
    console.log(formElement)
  })
}

enableValidation(selectorsValid.formSelector);


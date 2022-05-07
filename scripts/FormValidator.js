export  class FormValidator {
  #object;
  #form;

  constructor(object, form) {
    this.#object = object;
    this.#form = form;
  }
  #checkInputValidity(input) {
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

  #validateInput = (input) => {
    const errorElement = input.parentNode.querySelector(`.${input.id}-error`);
    this.#checkInputValidity(input);
    errorElement.textContent = input.validationMessage;
  }

  #setButtonState = (button, isValid) => {
    if (isValid) {
      button.disabled = false;
      button.classList.remove(this.#object.inactiveButtonClass);
    } else {
      button.disabled = true;
      button.classList.add(this.#object.inactiveButtonClass);
    }
  }

  #handleInput = (event) => {
    const currentForm = this.#form;
    const input = event.target;
    const submitButton = currentForm.querySelector(this.#object.submitButtonSelector);
    this.#validateInput(input);
    this.#setButtonState(submitButton, currentForm.checkValidity());
    if (input.validationMessage) {
      input.classList.add(this.#object.inputErrorClass);
    } else {
      input.classList.remove(this.#object.inputErrorClass);
    }
  }

  #handleSubmit = (event) => {
    event.preventDefault();
    const currentForm = event.target
    if (currentForm.checkValidity()) {
      currentForm.reset();
    }
  }

  enableValidation() {
    this.#form.addEventListener('submit', this.#handleSubmit);
    this.#form.addEventListener('input', (evt) => this.#handleInput(evt, this.#object));
  }
}

import { ERRORS } from '../utils/constants.js'

export class FormValidator {
  #object;
  #form;
  #button;

  constructor(object, form, button) {
    this.#object = object;
    this.#form = form;
    this.#button = button;
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

  setButtonState = (isValid) => {
    if (isValid) {
      this.#button.disabled = false;
      this.#button.classList.remove(this.#object.inactiveButtonClass);
    } else {
      this.#button.disabled = true;
      this.#button.classList.add(this.#object.inactiveButtonClass);
    }
  }

  #handleInput = (event) => {
    const currentForm = this.#form;
    const input = event.target;
    this.#validateInput(input);
    this.setButtonState(currentForm.checkValidity());
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

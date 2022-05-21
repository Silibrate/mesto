import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  #popup;
  #callbackSubmitForm;
  #form;

  constructor({ popupSelector, callbackSubmitForm }) {
    super(popupSelector);
    this.#popup = document.querySelector(popupSelector);
    this.#callbackSubmitForm = callbackSubmitForm;
    this.#form = this.#popup.querySelector('.popup__form');
  }

  #getInputValues() {
    const imputList = this.#popup.querySelectorAll('.popup__input');
    const formValues = {};
    imputList.forEach(imput => {
      formValues[imput.name] = imput.value;
    });
    return formValues;
  }

  close() {
    super.close();
    this.#form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this.#form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.#callbackSubmitForm(this.#getInputValues());
    })
  }
}

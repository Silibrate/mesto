import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  #popup;
  #callbackSubmitForm;
  #form;
  #imputList;
  constructor({ popupSelector, callbackSubmitForm }) {
    super(popupSelector);
    this.#popup = document.querySelector(popupSelector);
    this.#callbackSubmitForm = callbackSubmitForm;
    this.#form = this.#popup.querySelector('.popup__form');
    this.#imputList = this.#popup.querySelectorAll('.popup__input');
  }

  #getInputValues() {
    const formValues = {};
    this.#imputList.forEach(imput => {
      formValues[imput.name] = imput.value;
    });
    return formValues;
  }

  close() {
    this.#form.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this.#form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.#callbackSubmitForm(this.#getInputValues());
    })
  }
}

import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  #popupSelector;
  #callbackSubmitForm;

  constructor({ popupSelector, callbackSubmitForm }) {
    super(popupSelector);
    this.#popupSelector = popupSelector;
    this.#callbackSubmitForm = callbackSubmitForm;
  }

  #getInputValues() {
    const imputList = this.#popupSelector.querySelectorAll('.popup__input');
    const formValues = { };
    imputList.forEach(imput => {
      formValues[imput.name]=imput.value;
    });
    return formValues;
  }

  close() {
    super.close();
    this.#popupSelector.querySelector('.popup__form').reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this.#popupSelector.querySelector('.popup__form').addEventListener('submit', (e)=>{
      e.preventDefault();
      console.log(this.#callbackSubmitForm);
      this.#callbackSubmitForm();
    })
  }
}

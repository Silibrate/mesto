import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
  #popup;

  constructor({ popupSelector }) {
    super(popupSelector);
    this.#popup = document.querySelector(popupSelector);
  }

  close() {
    super.close();
  }

  setSubmitHanlder(callback) {
    this._handleSubmit = callback;
  }

  setEventListeners() {
    this.#popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
    super.setEventListeners();
  }
}

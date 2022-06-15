export default class Popup {
  #popup;
  #handleEsc;
  constructor(popupSelector) {
    this.#popup = document.querySelector(popupSelector);
    this.#handleEsc = this.#handleEscClose.bind(this)
  }

  open() {
    this.#popup.classList.add('popup_opened');
    document.addEventListener('keydown', this.#handleEsc);
  }

  #handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  #closeOverlay(event) {
    if (event.target.querySelector('.popup__content') || event.target.querySelector('.popup__items')) {
      this.close();
    }
  }

  renderLoading(saved) {
    const inactiveButtonClass = 'popup__button_disabled';
    const button = this.#popup.querySelector('.popup__button');
    button.classList.toggle(inactiveButtonClass);
    button.textContent = saved;
  }

  setEventListeners() {

    this.#popup.addEventListener('click', this.#closeOverlay.bind(this));
    this.#popup.querySelector('.popup__close').addEventListener("click", () => {
      this.close();
    })
  }

  close() {
    this.#popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this.#handleEsc);
  }

}

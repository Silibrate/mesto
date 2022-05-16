export default class Popup {
  #popupSelector;
  constructor(popupSelector) {
    this.#popupSelector = popupSelector;
  }

  open() {
    this.#popupSelector.classList.add('popup_opened');
    this.setEventListeners();
  }

  #handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  #closeOverlay(event) {
    if (event.target.querySelector('.popup__content') || event.target.querySelector('.popup__items')) {
      this.close();
      console.log(event.target.className);
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this.#handleEscClose.bind(this));
    this.#popupSelector.addEventListener('click',this.#closeOverlay.bind(this));
    this.#popupSelector.querySelector('.popup__close').addEventListener("click",()=>{
      this.close();
    })
  }

  close() {
    this.#popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this.#handleEscClose.bind(this));
    this.#popupSelector.removeEventListener('click', this.#closeOverlay.bind(this));
  }

}

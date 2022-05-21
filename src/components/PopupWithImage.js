import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  #popup;
  #popupImageTitle;
  #popupImage;
  constructor(popupSelector) {
    super(popupSelector);
    this.#popup = document.querySelector(popupSelector);
    this.#popupImageTitle = this.#popup.querySelector('.popup__image-title');
    this.#popupImage=this.#popup.querySelector('.popup__image');
  }

  open(photo, link) {
    super.open();
    this.#popupImageTitle.textContent = photo;;
    this.#popupImage.src = link;
    this.#popupImageTitle.alt = photo;
  }
}

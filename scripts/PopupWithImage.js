import Popup from "./Popup.js";
import { popupImage } from "./index.js";
import { popupImageTitle } from "./index.js";

export default class PopupWithImage extends Popup {
  #link;
  #name;
  #popupSelector;
  constructor(data, popupSelector) {
    super(popupSelector);
    this.#link = data.link;
    this.#name = data.name;
    this.#popupSelector = popupSelector;
  }
  open() {
    this.#popupSelector.classList.add('popup_opened');
    super.setEventListeners();
    popupImageTitle.textContent = this.#name;
    popupImage.src = this.#link;
    popupImage.alt = this.#name;
  }
}

export  class Card {
  #element;
  #link;
  #name;
  #cardSelector;

  constructor(data, cardSelector) {
    this.#link = data.link;
    this.#name = data.name;
    this.#cardSelector = cardSelector;
  }

  #getTemplate() {
    const cardElement = document
      .querySelector(this.#cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this.#element = this.#getTemplate();
    const cardImage = this.#element.querySelector('.card__image');
    cardImage.src = this.#link;
    cardImage.alt = this.#name;
    this.#element.querySelector('.card__title').textContent = this.#name;
    this.#setEventListeners();
    return this.#element
  }

  #setEventListeners() {
    this.#element.querySelector('.card__button_type_like').addEventListener('click', () => {
      this.#handleLikeClick();
    });
    this.#element.querySelector('.card__button_trash').addEventListener('click', (e) => {
      e.target.closest('.card').remove();
    })
    this.#element.querySelector('.card__image').addEventListener('click', () => {
      this.#openImage();
    })

  }

  #handleLikeClick() {
    this.#element.querySelector('.card__button_type_like').classList.toggle('card__button_type_on');
  }

  #openImage() {
    openPopup(popupPhoto);
    document.querySelector('.popup__image-title').textContent = this.#name;
    popupImage.src = this.#link;
    popupImage.alt = this.#name;
  }

}

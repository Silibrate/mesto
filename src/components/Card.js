
export class Card {

  /*  я не понял замечание по лишним переменным, что вы считаете тут лишним и не нужным.
  https://cdn.discordapp.com/attachments/815387318118121523/986888123650814052/Screenshot_28.png
  https://cdn.discordapp.com/attachments/815387318118121523/986888123847950346/Screenshot_29.png

  Если для вас объявление через #лишнее то без него нелязя делать приватный метот
  */
  #cardSelector;
  #handleCardClick;
  #uzerId
  #handleDeleteClick;
  #handleLikeClick;
  #isLike;
  #handleLikeClickDrop;
  constructor({ data, handleCardClick, handleDeleteClick }, handleLikeClick, handleLikeClickDrop, uzerId, cardSelector) {
    this._data = data;
    this.#cardSelector = cardSelector;
    this.#handleCardClick = handleCardClick;
    this.#uzerId = uzerId
    this.#handleDeleteClick = handleDeleteClick;
    this.#handleLikeClick = handleLikeClick;
    this.#isLike = false;
    this.#handleLikeClickDrop = handleLikeClickDrop;
  }

  #getTemplate() {
    const cardElement = document
      .querySelector(this.#cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  handleBasketClick() {
    this._element.remove();
    this._element = null;
  }

  changeLikeStatus(likes) {
    this._element.querySelector('.card__button_type_like').classList.toggle('card__button_type_on');
    this._element.querySelector(".card__likes__statistics").textContent = likes;
  }

  #likeOn() {
    if (!this.#isLike) {
      this.#handleLikeClick(this);
      this.#isLike = true;
    } else {
      this.#handleLikeClickDrop(this);
      this.#isLike = false;
    }
  }

  generateCard() {
    this._element = this.#getTemplate();
    const cardImage = this._element.querySelector('.card__image');
    this._element.querySelector('.card__likes__statistics').textContent = this._data.likes.length;
    cardImage.src = this._data.link;
    cardImage.alt = this._data.name;
    this._data.likes.forEach(element => {
      if (element._id === this.#uzerId) {
        this._element.querySelector('.card__button_type_like').classList.toggle('card__button_type_on');
        this.#isLike = true;
      }
    });
    if (this._data.owner._id !== this.#uzerId) {
      this._element.querySelector('.card__button_trash').style = 'display:none'
    }
    this._element.querySelector('.card__title').textContent = this._data.name;
    this.#setEventListeners();
    return this._element
  }

  #setEventListeners() {
    this._element.querySelector('.card__button_type_like').addEventListener('click', () => {
      this.#likeOn();
    });

    this._element.querySelector('.card__button_trash').addEventListener('click', (e) => {
      this.#handleDeleteClick(this)
    })

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this.#handleCardClick();
    })
  }
}

const popup = document.querySelector('.popup');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupClos = popup.querySelector('.popup__close');
const profileButtonFull = document.querySelector('.profile__button-full');
const popupAdd = document.querySelector('.popup-add');
const popupInputTitle = popupAdd.querySelector('.popup__input-title');
const popupCloseAdd = document.querySelector('.popup__close_add');
const popupInputNameTypeLink = popupAdd.querySelector('.popup__input-name_type_link');


const cardImage = document.querySelector('.card__image');
const cardTitle = document.querySelector('.card__title');
const cardButton = document.querySelector('.card__button');

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-name_type_user-job");
let card = document.querySelector('.card');
let popupButton = document.querySelector('.popup__button');

function addCards(cardImageValue, cardTitleValue){
  const cards = document.querySelector('.cards').content;
  const cardsElement = cards.document.querySelector('.cards').cloneNude(true);
}

function popupOpen() {
  popup.style.display = 'block';
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__subtitle").textContent;
}

function popupOpenFull() {
  popupAdd.style.display = 'block';
}

function buttonClose() {
  popup.style.display = 'none';
}

function buttonCloseFull() {
  popupAdd.style.display = 'none';
}

profileButtonEdit.addEventListener('click', () =>{
  popupOpen();
});

profileButtonFull.addEventListener('click', () =>{
  popupOpenFull();
});


popupClos.addEventListener('click', buttonClose);
popupCloseAdd.addEventListener('click',buttonCloseFull);

const ESC_KEY = "Escape";
document.addEventListener('keyup', function (event) {

  if (event.key === ESC_KEY) {
    buttonClose();
  }
})

function formSubmitHandler(evt) {
  evt.preventDefault();
  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__subtitle").textContent = jobInput.value;
  buttonClose();
}

formElement.addEventListener('submit', formSubmitHandler);
popupButton.addEventListener('click', formSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/*
card.querySelector('.card__button').addEventListener('click', function(evt){
  evt.target.classList.toggle('card__button_on');
}); :( */

import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

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

const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileButtonFull = document.querySelector('.profile__button-full');
const popupAdd = document.querySelector('.popup-add');
const popupCloseAdd = document.querySelector('.popup__close_add');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputNameTypeUserJob = document.querySelector('.popup__input-name_type_user-job');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileForm = document.querySelector('.popup__form');
const popupEdit = document.querySelector('.popup-edit');
const popupCloseEdit = document.querySelector('.popup__close-edit');
const cardTemplate = document.querySelector('.template').content;
const cards = document.querySelector('.cards');
const popupPhoto = document.querySelector('.popup_photo');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupClosePhoto = document.querySelector('.popup__close_photo');
const popupInputTitleCard = document.querySelector('.popup__input-title_card');
const popupInputTypeLink = document.querySelector('.popup__input-title_type-link');
const popupFormCreate = document.querySelector('.popup__form_create');
const popupButtonSaveCard = document.querySelector('.popup__button_save_card');
const selectorsValid = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-name_error',
};
const editUserForm = document.forms.register;
const createCardForm = document.forms.create;
const ERRORS = {
  empty: 'Вы пропустили это поле',
  wrongUrl: 'Введите адрес сайта',
}

function escapePopup(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escapePopup);
  popup.addEventListener('click', closeOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapePopup);
  popup.removeEventListener('click', closeOverlay);
}

profileButtonEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  popupInputNameTypeUserJob.value = profileSubtitle.textContent;
  popupInputName.value = profileTitle.textContent;
});

popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
})

profileButtonFull.addEventListener('click', () => {
  openPopup(popupAdd);
  popupButtonSaveCard.classList.add('popup__button_disabled')
  popupButtonSaveCard.disabled = true;
})

popupCloseAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileSubtitle.textContent = popupInputNameTypeUserJob.value;
  profileTitle.textContent = popupInputName.value;
  closePopup(popupEdit);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

function closeOverlay(event) {
  if (event.target.querySelector('.popup__content') || event.target.querySelector('.popup__items')) {
    closePopup(event.target.closest('.popup'));
    console.log(event.target.className);
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, ".template");
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
});

function submitСard(e) {
  e.preventDefault();
  const cartInfo = {
    name: popupInputTitleCard.value,
    link: popupInputTypeLink.value,
  }
  const userCard = new Card(cartInfo, ".template");
  const userCardElement = userCard.generateCard();
  cards.prepend(userCardElement);
  popupInputTitleCard.value = '';
  popupInputTypeLink.value = '';
  closePopup(popupAdd);
}

popupFormCreate.addEventListener('submit', submitСard);

const userForm = new FormValidator(selectorsValid, editUserForm);
const cardForm = new FormValidator(selectorsValid, createCardForm);
userForm.enableValidation();
cardForm.enableValidation();
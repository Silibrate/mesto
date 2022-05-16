import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

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

const popupButtonEdit = document.querySelector('.popup__button-edit');
const popupButtonSaveCard = document.querySelector('.popup__button_save_card');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileButtonFull = document.querySelector('.profile__button-full');
const popupAdd = document.querySelector('.popup-add');
const popupCloseAdd = document.querySelector('.popup__close_add');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputNameTypeUserJob = document.querySelector('.popup__input-name_type_user-job');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const profileTitle = document.querySelector('.profile__title');
const profileForm = document.querySelector('.popup__form');
const popupEdit = document.querySelector('.popup-edit');
const popupCloseEdit = document.querySelector('.popup__close-edit');
const cards = document.querySelector('.cards');
const popupPhoto = document.querySelector('.popup_photo');
export const popupImage = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__image-title');
const popupClosePhoto = document.querySelector('.popup__close_photo');
const popupInputTitleCard = document.querySelector('.popup__input-title_card');
const popupInputTypeLink = document.querySelector('.popup__input-title_type-link');
const popupFormCreate = document.querySelector('.popup__form_create');

const selectorsValid = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-name_error',
};
const editUserForm = document.forms.register;
const createCardForm = document.forms.create;
export const ERRORS = {
  empty: 'Вы пропустили это поле',
  wrongUrl: 'Введите адрес сайта',
}

/* function escapePopup(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
} */

/* function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escapePopup);
  popup.addEventListener('click', closeOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapePopup);
  popup.removeEventListener('click', closeOverlay);
} */

/* profileButtonEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  popupInputNameTypeUserJob.value = profileSubtitle.textContent;
  popupInputName.value = profileTitle.textContent;

}); */


const profile = new Popup(popupEdit);
const cardPopup = new Popup(popupAdd);
profileButtonEdit.addEventListener('click', () => {
  profile.open();
  const profilInfo = new UserInfo({name:popupInputName,job:popupInputNameTypeUserJob})
  profilInfo.getUserInfo();
});

popupCloseEdit.addEventListener('click', () => {
  profile.close();
})

profileButtonFull.addEventListener('click', () => {
  cardPopup.open();
  cardForm.setButtonState(false);
})

popupCloseAdd.addEventListener('click', () => {
  cardPopup.close();
});

function createCard(item) {
  const card = new Card(item, openImage(), ".template");
  const cardElement = card.generateCard();
  return cardElement
}

function submitСard(e) {
  e.preventDefault();
  const cartInfo = {
    name: popupInputTitleCard.value,
    link: popupInputTypeLink.value,
  }
  cards.prepend(createCard(cartInfo));
  closePopup(popupAdd);
}

popupFormCreate.addEventListener('submit', submitСard);

const userForm = new FormValidator(selectorsValid, editUserForm, popupButtonEdit);
const cardForm = new FormValidator(selectorsValid, createCardForm, popupButtonSaveCard);
userForm.enableValidation();
cardForm.enableValidation();

const CardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card({
      data: cardItem, handleCardClick: () => {
        const image = new PopupWithImage(cardItem, popupPhoto);
        image.open();
        console.log(image);
      }
    }, '.template');
    const cardElement = card.generateCard();
    CardList.addItem(cardElement);
  }
},
  cards
);
CardList.render();


const handleProfileFormSubmit = ()=>{
  profileSubtitle.textContent = popupInputNameTypeUserJob.value;
  profileTitle.textContent = popupInputName.value;
  console.log(profileSubtitle.textContent);
  console.log(popupInputNameTypeUserJob.value);
  profile.close();
}

const editPopup = new PopupWithForm({ popupSelector: popupEdit, callbackSubmitForm: handleProfileFormSubmit });

editPopup.setEventListeners()

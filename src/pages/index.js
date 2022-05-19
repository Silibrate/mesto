import "./index.css";
import {popupButtonEdit,popupButtonSaveCard,profileButtonEdit,profileButtonFull,popupAdd,popupCloseAdd,popupInputName,popupInputNameTypeUserJob,profileSubtitle,profileTitle,popupEdit,popupCloseEdit,cards,popupPhoto,popupInputTitleCard,popupInputTypeLink,selectorsValid,editUserForm,createCardForm} from "../utils/constants.js"
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

export const initialCards = [
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


 const profile = new Popup(popupEdit);
 const cardPopup = new Popup(popupAdd);
 const profilInfo = new UserInfo({ name: popupInputName, job: popupInputNameTypeUserJob });

profileTitle.textContent = "Жак-Ив Кусто";
profileSubtitle.textContent = "Исследователь океана";
profilInfo.getUserInfo(profileTitle, profileSubtitle);

profileButtonEdit.addEventListener('click', () => {
  profile.open();
  profilInfo.getUserInfo(profileTitle, profileSubtitle);
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
  const card = new Card({
    data: item, handleCardClick: () => {
      const image = new PopupWithImage(item, popupPhoto);
      image.open();
      console.log(image);
    }
  }, ".template");
  const cardElement = card.generateCard();
  return cardElement
}

function submitСard() {
  const cartInfo = {
    name: popupInputTitleCard.value,
    link: popupInputTypeLink.value,
  }
  cards.prepend(createCard(cartInfo));
  cardPopup.close();
}

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


const handleProfileFormSubmit = () => {
  profilInfo.setUserInfo(profileTitle, profileSubtitle);
  profile.close();
}

const editPopup = new PopupWithForm({ popupSelector: popupEdit, callbackSubmitForm: handleProfileFormSubmit });
const cartPopup = new PopupWithForm({ popupSelector: popupAdd, callbackSubmitForm: submitСard });
cartPopup.setEventListeners();
editPopup.setEventListeners();


const userForm = new FormValidator(selectorsValid, editUserForm, popupButtonEdit);
const cardForm = new FormValidator(selectorsValid, createCardForm, popupButtonSaveCard);
userForm.enableValidation();
cardForm.enableValidation();

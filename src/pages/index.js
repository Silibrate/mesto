import "./index.css";
import { profileButtonEdit, profileButtonFull, popupCloseAdd, popupInputName, popupInputNameTypeUserJob, profileSubtitle, profileTitle, popupCloseEdit, cards, selectorsValid, editUserForm, createCardForm, initialCards } from "../utils/constants.js"
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const editPopup = new PopupWithForm({ popupSelector: '.popup-edit', callbackSubmitForm: handleProfileFormSubmit });
const cartPopup = new PopupWithForm({ popupSelector: '.popup-add', callbackSubmitForm: submitСard });
cartPopup.setEventListeners();
editPopup.setEventListeners();

const profilInfo = new UserInfo({ name: profileTitle, job: profileSubtitle });

profileTitle.textContent = "Жак-Ив Кусто";
profileSubtitle.textContent = "Исследователь океана";

profileButtonEdit.addEventListener('click', () => {
  editPopup.open();
  profilInfo.getUserInfo(popupInputName, popupInputNameTypeUserJob);
});

popupCloseEdit.addEventListener('click', () => {
  editPopup.close();
})

profileButtonFull.addEventListener('click', () => {
  cartPopup.open();
  cardForm.setButtonState(false);
})

popupCloseAdd.addEventListener('click', () => {
  cartPopup.close();
});

const image = new PopupWithImage('.popup_photo');
image.setEventListeners();

function createCard(item) {
  const card = new Card({
    data: item, handleCardClick: () => {
      image.open(item.name, item.link);
    }
  }, ".template");

  return card.generateCard()
}

function submitСard(data) {
  const cartInfo = {
    name: data.cardname,
    link: data.photo
  }
  cardList.addItem(createCard(cartInfo));
  cartPopup.close();
}

const cardList = new Section({
  items: initialCards.reverse(),
  renderer: (cardItem) => {
    cardList.addItem(createCard(cardItem));
  }
},
  cards
);
cardList.render();

function handleProfileFormSubmit(data) {
  console.log(data)
  profilInfo.setUserInfo(data.username, data.userjob);
  editPopup.close();
}

const userForm = new FormValidator(selectorsValid, editUserForm);
const cardForm = new FormValidator(selectorsValid, createCardForm);
userForm.enableValidation();
cardForm.enableValidation();

const popups = document.querySelectorAll('.popup');
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
const popupInputTypeLink = document.querySelector('.popup__input_type-link');
const popupFormCreate = document.querySelector('.popup__form_create');
const popupButtonSaveCard = document.querySelector('.popup__button_save_card');

function escapePopup(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_open');
    closePopup(popupOpened);
  }
  evt.target.removeEventListener('keydown', escapePopup);
}

function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', escapePopup);
  popup.addEventListener('click', closeOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
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

function createCard(name, link) {
  const element = cardTemplate.querySelector('.card').cloneNode(true);
  const cardPhoto = element.querySelector('.card__image');
  const cardTitle = element.querySelector('.card__title');
  cardPhoto.src = link;
  cardPhoto.alt = name;
  cardTitle.textContent = name;
  const cardButtonTrash = element.querySelector('.card__button_trash');
  cardButtonTrash.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  })
  element
    .querySelector('.card__button_type_like')
    .addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__button_type_on');
    })
  cardPhoto.addEventListener('click', () => {
    openPopup(popupPhoto);
    popupImageTitle.textContent = name;
    popupImage.src = link;
    popupImage.alt = name;
  });
  return element;
}

popupClosePhoto.addEventListener('click', () => {
  closePopup(popupPhoto)
});

function submitСard(evt) {
  evt.preventDefault();
  console.log(popupInputTypeLink.value);
  cards.prepend(createCard(popupInputTitleCard.value, popupInputTypeLink.value));
  popupInputTitleCard.value = '';
  popupInputTypeLink.value = '';
  closePopup(popupAdd);

}

popupFormCreate.addEventListener('submit', submitСard);

initialCards.forEach((item) => {
  cards.prepend(createCard(item.name, item.link))
})

const editUserForm = document.forms.register;
const createCardForm = document.forms.create;
const ERRORS = {
  empty: 'Вы пропустили это поле',
  wrongUrl: 'Введите адрес сайта',
}



function closeOverlay(event) {
  if (event.target.querySelector('.popup__content') || event.target.querySelector('.popup__items')) {
    closePopup(event.target.closest('.popup'));
    console.log(event.target.className);
  }
}

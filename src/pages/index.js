import "./index.css";
import {createAvatarForm, popupButtonSaveCard, popupButtonDeleteCard, popupButtonEdit, popupButtonSaveAvatar, profileAvatarConteiner, profileTitle, profileSubtitle, profileButtonEdit, profileButtonFull, popupCloseAdd, popupInputName, popupInputNameTypeUserJob, popupCloseEdit, cards, selectorsValid, editUserForm, createCardForm, initialCards } from "../utils/constants.js"
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from "../components/api";
import PopupWithConfirm from "../components/PopupWithConfirm";

const editPopup = new PopupWithForm({ popupSelector: '.popup-edit', callbackSubmitForm: handleProfileFormSubmit });
const cartPopup = new PopupWithForm({ popupSelector: '.popup-add', callbackSubmitForm: submitСard });
const popupConfirm = new PopupWithConfirm({ popupSelector: '.popup_confirm' });
const popupAvatar = new PopupWithForm({ popupSelector: '.popup_avatar', callbackSubmitForm: saveDataFormAvatar });
const profilInfo = new UserInfo({ name: '.profile__title', job: '.profile__subtitle', selectorAvatar: '.profile__image' });

const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: '470ad620-2a28-423a-83e5-333c76ae2cdf',
    'Content-Type': 'application/json'
  }
}

const api = new Api(config);
api.UserInfo()
  .then(data => {
    profileTitle.textContent = data.name;
    profileSubtitle.textContent = data.about;
    console.log(data, 'uzer_id')
  })
  .catch((err) => {
    console.log(err);
  });

profileButtonEdit.addEventListener('click', () => {
  editPopup.open();
  popupInputName.value = profilInfo.getUserInfo().title;
  popupInputNameTypeUserJob.value = profilInfo.getUserInfo().subtitle;
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

const deleteTask = (id) => {
  return api.deleteCard(id)
}

const handleLikeClick = (item) => {
  api
    .likeCard(item._data._id)
    .then((res) => {
      const count = item._element.querySelector(".card__likes__statistics");
      count.textContent = res.likes.length;
      item._element
        .querySelector(".card__button_type_like")
        .classList.add("card__button_type_on");
    })
    .catch((res) => {
      console.log(res);
    });
};

const handleLikeClickDrop = (item) => {
  api
    .dislikeCard(item._data._id)
    .then((res) => {
      const count = item._element.querySelector(".card__likes__statistics");
      count.textContent = res.likes.length;
      item._element
        .querySelector(".card__button_type_like")
        .classList.remove("card__button_type_on");
    })
    .catch((res) => {
      console.log(res);
    });
};

function createCard(item) {
  const card = new Card({
    data: item, handleCardClick: () => {
      image.open(item.name, item.link);
    }, handleDeleteClick: handleDeleteCard
  }, handleLikeClick, handleLikeClickDrop, uzerId, deleteTask, ".template");
  return card.generateCard()
}

const handleDeleteCard = (item) => {
  popupConfirm.open();
  popupConfirm.setSubmitHanlder(() => {
    renderDeleteLoading(true, popupButtonDeleteCard);
    api
      .deleteCard(item)
      .then(() => {
        popupConfirm.close();
        item.handleBasketClick();
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        renderDeleteLoading(false, popupButtonDeleteCard);
      })
  });
};

function submitСard(data) {
  renderLoading(true, popupButtonSaveCard);
  api.createCard(data)
    .then((res) => {
      const cardList = new Section({
        items: res,
        renderer: (res) => {
          cardList.addItem(createCard(res));
        }
      },
        cards
      );
      cardList.addItem(createCard(res));
      cartPopup.close();
    })
    .catch((res) => {
      console.log(res);
    })
    .finally(() => {
      renderLoading(false, popupButtonSaveCard);
    })
}

function handleProfileFormSubmit(data) {
  renderLoading(true, popupButtonEdit);
  api.updateInfo(data)
    .then((res) => {
      profilInfo.setUserInfo(res.name, res.about)
    })
    .catch((res) => {
      console.log(res);
    })
    .finally(() => {
      renderLoading(false, popupButtonEdit);
    })
  editPopup.close();
}

let uzerId;

function saveDataFormAvatar(avatar) {
  renderLoading(true, popupButtonSaveAvatar);
  api
    .updateAvatar(avatar)
    .then((avatar) => {
      profilInfo.setProfileAvatar(avatar);
      console.log(avatar)
      popupAvatar.close();
    })
    .catch((res) => {
      console.log(res);
    })
    .finally(() => {
      renderLoading(false, popupButtonSaveAvatar);
    });
}

api.getAllNeededData()
  .then((res) => {
    uzerId = res[1]._id
    console.log(res[1]._id, 'dd')
    const cardList = new Section({
      items: res[0].reverse(),
      renderer: (cardItem) => {
        cardList.addItem(createCard(cardItem));
      }
    },
      cards
    );
    cardList.render();
    profilInfo.setUserInfo(res[1].name, res[1].about)
    console.log(res)
    profilInfo.setProfileAvatar(res[1].avatar)
    document.querySelector('.profile__image').src = res[1].avatar
  })
  .catch((res) => {
    console.log(res);
  });

function renderLoading(isLoading, savebutton) {
  if (isLoading) {
    savebutton.textContent = "Сохранение...";
  } else {
    savebutton.textContent = "Сохранить";
  }
}

function renderDeleteLoading(isLoading, savebutton) {
  if (isLoading) {
    savebutton.textContent = "Удаление...";
  } else {
    savebutton.textContent = "удалить";
  }
}

profileAvatarConteiner.addEventListener('click', () => {
  popupAvatar.open();
  avatarForm.setButtonState(false);
  console.log(document.forms[3])
})

cartPopup.setEventListeners();
editPopup.setEventListeners();
popupConfirm.setEventListeners();
popupAvatar.setEventListeners();

const avatarForm = new FormValidator(selectorsValid, createAvatarForm);
const userForm = new FormValidator(selectorsValid, editUserForm);
const cardForm = new FormValidator(selectorsValid, createCardForm);
userForm.enableValidation();
cardForm.enableValidation();
avatarForm.enableValidation();

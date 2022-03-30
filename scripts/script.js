const popup = document.querySelector('.popup');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupClos = popup.querySelector('.popup__close');
const profileButtonFull = document.querySelector('.profile__button-full');
const popupAdd = document.querySelector('.popup-add');
const popupCloseAdd = document.querySelector('.popup__close_add');

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-name_type_user-job");
let popupButton = document.querySelector('.popup__button');

function popupOpen() {
  popup.classList.add('popup_open');
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__subtitle").textContent;
}

function popupOpenFull() {
  popupAdd.classList.add('popup_open');
}

function buttonClose() {
  popup.classList.remove('popup_open');
}

function buttonCloseFull() {
  popupAdd.classList.remove('popup_open');
}

profileButtonEdit.addEventListener('click', () => {
  popupOpen();
});

profileButtonFull.addEventListener('click', () => {
  popupOpenFull();
});


popupClos.addEventListener('click', buttonClose);
popupCloseAdd.addEventListener('click', buttonCloseFull);

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

const imageName = document.querySelector('.image__name')
const image = document.querySelector('.popup__image');
const popupPhoto = document.querySelector('.popup_photo');
const popupClosePhoto = document.querySelector('.popup__close_photo');
const popupButtonSaveCard = document.querySelector('.popup__button_save_card');
const popupInputTitleCard = document.querySelector('.popup__input-title_card');
const popupInputNameTypeLink = document.querySelector('.popup__input-name_type_link');
const templateCard = document.querySelector('.template').content;
const cards = document.querySelector('.cards');

function createCards(name, link) {
  const element = templateCard.querySelector('.card').cloneNode(true);
  const cardImage = element.querySelector('.card__image');
  const cardTitle = element.querySelector('.card__title');
  cardImage.src = link;
  cardTitle.textContent = name;
  element
    .querySelector('.card__button_type_close')
    .addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__button_type_on');
    })

  element
    .querySelector('.card__button_trash')
    .addEventListener('click', function (evt) {
      evt.target.closest('.card').remove();
    })

    element
    .querySelector('.card__image')
    .addEventListener('click',function(){
      popupOpenPhoto();
      imageName.textContent=name;
      image.src=link;
    })
  return element;
}

function popupOpenPhoto() {
  popupPhoto.classList.add('popup_open');
}

function buttonClosePhoto() {
  popupPhoto.classList.remove('popup_open');
}

popupClosePhoto.addEventListener('click',buttonClosePhoto );

initialCards.forEach(function (item) {
  cards.prepend(createCards(item.name, item.link));
})

function cardSubmit(evt) {
  evt.preventDefault();
  cards.prepend(createCards(popupInputTitleCard.value, popupInputNameTypeLink.value));
  popupInputTitleCard.value = "";
  popupInputNameTypeLink.value = "";
  buttonCloseFull();
}

popupButtonSaveCard.addEventListener('click', cardSubmit);



/* const  cardButtonTypeClose = document.querySelector('.card__button_type_close');
function like (evt){
evt.preventDefault();
cardButtonTypeClose.target.toggle('card__button_type_on');
}
cardButtonTypeClose.addEventListener('click',like);
 */


/*
const createCards = (cardsAdd) =>{
return `
<div class="card">
  <img class="card__image" src="${cardsAdd.link}" alt="crash">
  <div class="card__conteiner">
  <h2 class="card__title">${cardsAdd.name}</h2>
  <button class="card__button card__button_type_close" type="submit"></button>
</div>
</div>
</template>`}

const cards = document.querySelector('.cards');

const elements = initialCards.map(cardsAdd=>{
  return createCards(cardsAdd);
})

cards.insertAdjacentHTML('afterbegin',elements.join(''));

const popupInputNameTypeLink = document.querySelector('.popup__input-name_type_link');
const popupInputTitleCard = document.querySelector('.popup__input-title_card');
const popupButtonSaveCard = document.querySelector('.popup__button_save_card');
function create(evt){
  evt.preventDefault();
  document.querySelector('.card__image').src= popupInputNameTypeLink.value;
  document.querySelector('.card__title').textContent=popupInputTitleCard.value;
  popupInputNameTypeLink.value='';
  popupInputTitleCard.value='';
  buttonCloseFull();
}
popupButtonSaveCard.addEventListener('click',create);

function newCards(name,link){
  document.querySelector('.card__image').src= popupInputNameTypeLink.value;
  document.querySelector('.card__title').textContent=popupInputTitleCard.value;
  const copiTemplate= createCards(cardsAdd);

} */




/*
card.querySelector('.card__button').addEventListener('click', function(evt){
  evt.target.classList.toggle('card__button_on');
});  */

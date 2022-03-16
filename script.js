const popupEdit = document.querySelector('.popup-edit');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupClos = popupEdit.querySelector('.popup__close');
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input_user_Job");
let card = document.querySelector('.card');
let popupButton = document.querySelector('.popup__button');

function popupOpen() {
  popupEdit.style.display = 'block';
}

function buttonClose() {
  popupEdit.style.display = 'none';
}

profileButtonEdit.addEventListener('click', () =>{
  popupOpen();
});
nameInput.value = document.querySelector(".profile__title").textContent;
jobInput.value = document.querySelector(".profile__subtitle").textContent;

popupClos.addEventListener('click', buttonClose);

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
}

formElement.addEventListener('submit', formSubmitHandler);
popupButton.addEventListener('click', formSubmitHandler);


card.querySelector('.card__button').addEventListener('click', function(evt){
  evt.target.classList.toggle('card__button_on');
});/* я не понимаю по чему лайкается только первая карточка*/

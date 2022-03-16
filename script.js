const popupEdit = document.querySelector('.popup-edit');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupClos = popupEdit.querySelector('.popup__close');

function popupOpen() {
  popupEdit.style.display = 'block';
}

function buttonClose() {
  popupEdit.style.display = 'none'
}

profileButtonEdit.addEventListener('click', popupOpen);
popupClos.addEventListener('click', buttonClose);

const ESC_KEY = "Escape";
document.addEventListener('keyup', function (event) {

  if (event.key === ESC_KEY) {
    buttonClose();
  }
})


let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input_user_Job");

nameInput.value = document.querySelector(".popup__input-name").textContent;
jobInput.value = document.querySelector(".popup__input_user_Job").textContent;

function formSubmitHandler(evt) {
    evt.preventDefault();
    document.querySelector(".profile__title").textContent = nameInput.value;
    document.querySelector(".profile__subtitle").textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);







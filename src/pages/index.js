import "./index.css"; 
// import "../vendor/fonts/fonts.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  defaultConfig,
  openImageFormModal,
  editButton,
  addButton,
  listWrapper,
  templateCardSelector,
  editFormModal,
  addFormModal,
} from "../utils/constants.js";



const popupWithImage = new PopupWithImage(openImageFormModal);
popupWithImage.setEventListeners();

const renderCard = (cardItem) => {
  const renderNewCard = new Card(
    {
      cardItem,
      imageModal: ({ name, link }) => {
        popupWithImage.open(name, link);
      },
    },
    templateCardSelector
  );

  const cardTemplate = renderNewCard.generateCard();
  return cardTemplate;
}

// Creates initial cards
const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      cardList.addItem(renderCard(cardItem));
    },
  },
  listWrapper
);

cardList.renderItems();

// Add new form
const addFormElement = new PopupWithForm({
  popupSelector: addFormModal,
  handleFormSubmit: (cardItem) => {
    document.querySelector(listWrapper).prepend(renderCard(cardItem));
  },
});

addFormElement.setEventListeners();

addButton.addEventListener('click', () => {
  addFormElement.open();
});

// Edit form
const editFormElement = new PopupWithForm({
  popupSelector: editFormModal,
  handleFormSubmit: (cardItem) => {
    const infoUser = new UserInfo(cardItem);
    infoUser.setUserInfo();
  },
});
editFormElement.setEventListeners();

editButton.addEventListener('click', () => {
  editFormElement.open();
});

// Validation for all forms
const formList = Array.from(
  document.querySelectorAll(defaultConfig.formSelector)
);
formList.forEach((formElement) => {
  const formValidate = new FormValidator(defaultConfig, formElement);
  formValidate.enableValidation();
});
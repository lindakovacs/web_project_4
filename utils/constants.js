export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const defaultConfig = {
  formSelector: ".form__container",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

export const editButton = document.querySelector(".profile__edit-button"); 
export const addButton = document.querySelector(".profile__add-button"); 
export const profileName = document.querySelector(".profile__title"); 
export const profileJob = document.querySelector(".profile__subtitle"); 

export const closeButtonSelector = ".form__reset-button";
export const listWrapper = ".cards__grid";
export const openImageFormModal = ".form--add-image";
export const editFormModal = ".form--edit-profile";
export const addFormModal = ".form--add-card";
export const templateCardSelector = ".card-template";


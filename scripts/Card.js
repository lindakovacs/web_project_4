import { toggleForm }  from './index.js';

const formImageModal = document.querySelector('.form__image');
const formImageTitle = document.querySelector('.form__image-title');
const openImageFormModal = document.querySelector('.form--add-image');

class Card {
    constructor(name, link, cardTemplateSelector) {
        this._name = name;
        this._link = link;

        this._cardTemplateSelector = cardTemplateSelector;
    }

    _getCardTemplate() {
        const cardTemplate = document
        .querySelector(this._cardTemplateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardTemplate;
    }

    _setEventListeners() {
        this._card.querySelector(".card__like-button").addEventListener("click", (e) => {
          this._likeModal(e);
        });
        this._card.querySelector(".card__delete-button").addEventListener("click", (e) => {
          this._deleteButtonModal(e);
        });
        this._card.querySelector(".card__image").addEventListener("click", (e) => {
        this._imageModal(e);
        });
      }

    _likeModal(e) {
        e.target.classList.toggle('card__like-button_active');
    }

    _deleteButtonModal() { 
        this._card.remove(this._card);
    }

    _imageModal() {
        formImageModal.src = "";
        formImageModal.src = `${this._link}`;
        formImageModal.alt = `${this._name}`; 
        formImageTitle.textContent = this._name;
        toggleForm(openImageFormModal);
    }

    generateCard() {
        this._card = this._getCardTemplate();

        this._card.querySelector('.card__image').style.backgroundImage = `url('${this._link}')`;
        this._card.querySelector('.card__title').textContent = this._name;

        this._setEventListeners();

        return this._card;
    }

}

export default Card;
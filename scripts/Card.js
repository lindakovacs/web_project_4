const cardTemplateSelector = document.querySelector('.card-template').content.querySelector('.card');
const formImageModal = document.querySelector('.form__image');
const formImageTitle = document.querySelector('.form__image-title');
const openImageFormModal = document.querySelector('.form--add-image');


class Card {
    constructor(data, cardTemplateSelector) {
        this._name = data.name;
        this._link = data.link;

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
        this._imageModal();
        });
      }

    _likeModal(e) {
        e.target.classList.toggle('card__like-button_active');
    }

    _deleteButtonModal(e) {
        this._card.closest(".card").remove(e);
    }

    _imageModal() {
        formImageModal.src = "";
        formImageModal.src = `${this._link}`;
        formImageModal.alt = `${this._name}`; 
        formImageTitle.textContent = this._name;
        this._toggleForm(openImageFormModal);
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
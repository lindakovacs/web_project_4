export default class Card {
  constructor({ cardItem, imageModal }, cardTemplateSelector) {
    this._name = cardItem.name;
    this._link = cardItem.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._imageModal = imageModal;
  }
  
  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
     
    return cardTemplate;
  }

_setEventListeners() {
    //like button
    this._card
      .querySelector(".card__like-button")
      .addEventListener("click", (e) => {
        e.target.classList.toggle("card__like-button_active");
      });
    //delete button
    this._card
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._card.remove();
        this._card = null;
      });
    //image popup
    this._card.querySelector(".card__image")
      .addEventListener("click", () => {
      this._imageModal({
        name: this._name,
        link: this._link,
      });
    });
  }

  generateCard() {
    this._card = this._getCardTemplate();

    this._card.querySelector(
      ".card__image"
    ).style.backgroundImage = `url('${this._link}')`;
    this._card.querySelector(".card__title")
    .textContent = this._name;

    this._setEventListeners();

    return this._card;
  }
}

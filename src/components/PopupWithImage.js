import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  // Adds image to the popup, image src attribute and caption to the image
  open(name, link) {
    const imagePopupElement = this._popupElement.querySelector(".form__image");

    imagePopupElement.src = link;
    imagePopupElement.alt = name;
    this._popupElement.querySelector(".form__image-title").textContent = name;
    super.open();
  }
}

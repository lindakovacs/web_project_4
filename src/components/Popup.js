import {EscKey} from "../utils/constants.js"

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Closing the popup by pressing the Esc key
  _handleEscClose() {
    if(event.key === 'Escape' || event.keyCode === EscKey &&
        this._formElement.classList.contains(
          `${this._popupSelector}_visible`))
        {
      this.close();
    }
  }

  //  Closes the popup using the mouse
  setEventListeners() {
    this._popupElement
      .querySelector(".form__reset-button")
      .addEventListener("click", (e) => {
        //e.preventDefault();
        this.close();
        // this._handleEscClose();
        e.stopPropagation();
      });

    // Closes the form when clicking outside the form
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("form")) {
        // e.preventDefault();
        this._handleEscClose(e.key);
        this.close(e.target);
      }
    });
  }
  // Opens the popup
  open() {
    this._popupElement.classList.add("form_visible");
    document.addEventListener("keydown", (e) => {
      this._handleEscClose(e.key);
    });
  }

  //Closes the popup
  close(e) {
    this._popupElement.classList.remove("form_visible");
  }
}

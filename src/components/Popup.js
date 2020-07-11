export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose() {
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" ||
        (e.keyCode === 27 &&
          this._formElement.classList.contains(
            `${this._popupSelector}_visible`
          ))
      ) {
        this.close();
      }
    });
  }

  //  Adds click event listener to the close the popup
  setEventListeners() {
    this._popupElement
      .querySelector(".form__reset-button")
      .addEventListener("click", (e) => {
        this.close();
        // this._handleEscClose();
        e.stopPropagation();
      });

    // Closes the form when clicking outside the form
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("form")) {
        this._handleEscClose(e.key);
        this.close(e.target);
        e.preventDefault();
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
  close() {
    this._popupElement.classList.remove("form_visible");
    document.removeEventListener("keydown", () => this._handleEscClose);
  }
}

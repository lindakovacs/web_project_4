export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Closes the popup when pressing the Esc key
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  // Adds click event listener to the close the popup
  setEventListeners() {
    this._popupElement
      .querySelector(".form__reset-button")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.close();
        //   e.stopPropagation();
      });

    //Closes the form when clicking outside the form
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("form")) {
        this.close();
      }
    });
  }

  // Opens the popup
  open() {
    this._popupElement.classList.add("form_visible");
    document.addEventListener("keydown", (e) => {
      this._handleEscClose(e);
    });
  }

  //Closes the popup
  close() {
    this._popupElement.classList.remove("form_visible");
  }
}

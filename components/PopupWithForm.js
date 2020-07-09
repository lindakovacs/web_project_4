import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".form__container");
  }

  // Collects data from all the input fields
  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll('.form__input');
    this._formValues = {};
    this._inputList.forEach(inputElement => this._formValues[inputElement.name] = inputElement.value);
    return this._formValues;
  }

  // Adds click event listener to the close button and adds submit event handler
  setEventListeners(){
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(
        this._getInputValues()
      );
      this.close();
    });
  }

  // Modifies the close parent method to reset the form when the popup is closed
  close() {
    super.close();
    this._formElement.reset();
  }
}

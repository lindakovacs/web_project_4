import Popup from "./Popup.js";
import { EnterKey } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".form__container");
    this._buttonValue = this._popupElement.querySelector('.form__submit-button').value;
  }

  // Collects data from all the input fields
  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll('.form__input');
    this._formValues = {};
    this._inputList.forEach(inputElement => this._formValues[inputElement.name] = inputElement.value);
    return this._formValues;
  }

  // Add click event listener to the close button and add submit event handler
  setEventListeners(){
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.renderLoading(true);
      this._handleFormSubmit(
        this._getInputValues(),
        this._listItem,
        this._cardId
      );
      this.close();
    });
    //Submit form by pressing the Enter key
    this._popupElement.addEventListener("keydown", (e) => {
      if (e.which === EnterKey) {
        this.renderLoading(true);
        this._handleFormSubmit(this._getInputValues());
      }
    });
  }

  // Modifies the close parent method to reset the form when the popup is closed
  close() {
    super.close();
    this._formElement.reset();
  }
  
  renderLoading(isLoading) {
    if(isLoading) {
      this._popupElement.querySelector(
        ".form__submit-button").value =
        "Saving...";
    }
    else {
      this._popupElement.querySelector(
        ".form__submit-button"
      ).value = this._buttonValue;
    }
  }

  setSubmitAction(listItem, cardId) {
    this._listItem = listItem;
    this._cardId = cardId;
  }

}

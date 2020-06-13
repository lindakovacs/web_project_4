const formValidation = {
    formSelector: ".form__container",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "form__input_type_error", 
    errorClass: "form__input-error_visible" 
};

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(formValidation.inputErrorClass);   
    errorElement.textContent = errorMessage;
    errorElement.classList.add(formValidation.errorClass);
};
  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(formValidation.inputErrorClass);  
    errorElement.classList.remove(formValidation.errorClass);
    errorElement.textContent = "";
};  

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};
  
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
};
  
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(formValidation.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(formValidation.inactiveButtonClass);
      buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(formValidation.inputSelector));
    const buttonElement = formElement.querySelector(formValidation.submitButtonSelector);
    
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
};


const enableValidation = (form) => {
  const formList = Array.from(document.querySelectorAll(form.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // setEventListeners(formElement);

    const fieldsetList = Array.from(formElement.querySelectorAll(".form__fields"));
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation(formValidation);
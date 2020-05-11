const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.form__reset-button');
const form = document.querySelector('.form');
const saveButton = editButton.querySelector('.form__submit-button');

const formInput = document.querySelector('.form__container');
const titleInput = formInput.querySelector('.form__title');
const subtitleInput = formInput.querySelector('.form__subtitle');

const titleValue = document.querySelector('.profile__title');
const subtitleValue = document.querySelector('.profile__subtitle');

const toggleForm = () => form.classList.toggle('form_visible');

editButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);

formInput.addEventListener('submit', (e) => {
    e.preventDefault();

    titleValue.textContent = titleInput.value;
    subtitleValue.textContent = subtitleInput.value;

    toggleForm();
});
const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

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

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const listWrapper = document.querySelector('.cards__grid');


function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
   

    cardTitle.textContent = card.name;
    cardImage.style.backgroundImage = 'url(' + card.link +')';
    
    cardLikeButton.addEventListener('click', () => {
        // changeLikeColor()
    });
    return cardElement;
}

initialCards.forEach((card) => {
    listWrapper.prepend(createCard(card));
});

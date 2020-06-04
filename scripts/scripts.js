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

const editFormModal = document.querySelector('.form__edit');
const addFormModal = document.querySelector('.form__add');
const openImageFormModal = document.querySelector('.form__add-image');
const formImageModal = document.querySelector('.form__image');
const formImageTitle = document.querySelector('.form__image-title');

const editButton = document.querySelector('.profile__edit-button');
const editCloseIcon = editFormModal.querySelector('.form__reset-button');
const addCloseIcon = addFormModal.querySelector('.form__reset-button');
const addButton = document.querySelector('.profile__add-button');
const imageCloseIcon = openImageFormModal.querySelector('.form__reset-button');

const nameInput = document.querySelector('.form__title');
const jobInput = document.querySelector('.form__subtitle');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const titleInput = document.querySelector('.form__card-title');
const linkInput = document.querySelector('.form__image-link');

const listWrapper = document.querySelector('.cards__grid');
const templateCard = document.querySelector('.card-template').content.querySelector('.card');


addButton.addEventListener('click', () => {
  toggleForm(addFormModal);
});
addCloseIcon.addEventListener('click', () => {
  toggleForm(addFormModal);
});

editButton.addEventListener('click', () => {
  toggleForm(editFormModal);
});
editCloseIcon.addEventListener('click', () => {
  toggleForm(editFormModal);
});

imageCloseIcon.addEventListener('click', () => {
  toggleForm(openImageFormModal);
});

editFormModal.addEventListener('submit', editFormSubmitHandler);
addFormModal.addEventListener('submit', addFormSubmitHandler);

function toggleForm (card) {
  card.classList.toggle('form_visible');
}

function editFormSubmitHandler (e) {
    e.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    toggleForm(editFormModal);
}

function addFormSubmitHandler (e) {
  e.preventDefault();

  const newCard =
    {
        name: titleInput.value,
        link: linkInput.value
    };
  renderCard(newCard);
  toggleForm(addFormModal);
}

function renderCard(card) {
  listWrapper.prepend(createCard(card));
}

function createCard(card) {
  const cardModal = templateCard.cloneNode(true);
  const imageModal = cardModal.querySelector('.card__image');
  const titleModal = cardModal.querySelector('.card__title');
  const deleteButtonModal = cardModal.querySelector('.card__delete-button');
  const likeModal = cardModal.querySelector('.card__like-button');

  imageModal.style.backgroundImage = `url('${card.link}')`;
  titleModal.textContent = card.name;

  deleteButtonModal.addEventListener('click', () => {
    const listItem = deleteButtonModal.closest(".card");
    listItem.remove();
  });

  likeModal.addEventListener('click', (e) => {
    e.target.classList.toggle('card__like-button_active');
  });

  imageModal.addEventListener('click', () => {
    formImageModal.src = `${card.link}`;
    formImageModal.alt = `${card.name.replace(/\s+/g, '-').toLowerCase()}`;
    formImageTitle.textContent = card.name;
    toggleForm(openImageFormModal);
  });

  return cardModal;
}

initialCards.forEach((card) => {
  renderCard(card);
});


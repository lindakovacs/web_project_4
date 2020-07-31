export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers; 
    }

    getAppInfo(){
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }

    // Load Cards from the Server
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers,
        })
          .then((res) =>
            res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
          )
          .catch((err) => {
            console.log(err);
          });
    }

    // Load User Information from the Server
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers,
        })
          .then((res) =>
            res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
          )
          .catch((err) => {
            console.log(err);
          });
    }

    // Update Profile Picture
    setUserAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          headers: this._headers,
          method: "PATCH",
          body: JSON.stringify(
            //   avatar
            { avatar: avatar.link }
          ),
        })
          .then((res) =>
            res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
          )
          .catch((err) => {
            console.log(err);
          });
    }

    //  Edit Profile
    setUserProfile(data) {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers,
          method: "PATCH",
          body: JSON.stringify({
            name: data.userName,
            about: data.userJob,
          }),
        })
          .then((res) =>
            res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
          )
          .catch((err) => {
            console.log(err);
          });
    }


    // setUserProfile({name, about}) {
    //     return fetch(`${this._baseUrl}/users/me`, {
    //       headers: this._headers,
    //       method: "PATCH",
    //       body: JSON.stringify({ name, about }),
    //     })
    //     .then((res) =>
    //     res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    //     )
    //     .catch((err) => {
    //     console.log(err);
    //     });
    // }


    // Add New Card
    addCard({name, link}) {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers,
          method: "POST",
          body: JSON.stringify({
            name: name,
            link: link,
          }),
        })
          .then((res) =>
            res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
          )
          .catch((err) => {
            console.log(err);
          });
    }

    // // Add New Card
    // addCard(data) {
    //     return fetch(`${this._baseUrl}/cards`, {
    //       headers: this._headers,
    //       method: "POST",
    //       body: JSON.stringify({
    //         name: data.name,
    //         link: data.link,
    //       }),
    //     })
    //       .then((res) =>
    //         res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    //       )
    //       .catch((err) => {
    //         console.log(err);
    //       });
    // }

    // addCard(cardInfo) {
    //     return fetch(`${this.baseUrl}/cards`, {
    //       headers: this._headers,
    //       method: "POST",
    //       body: JSON.stringify(cardInfo),
    //     })
    //     .then((res) =>
    //     res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    //     )
    //     .catch((err) => {
    //     console.log(err);
    //     });
    // }
    
    // Deleting a Card
    deleteCard({_id}) {
        return fetch(`${this._baseUrl}/cards/${_id}`, {
          headers: this._headers,
          method: "DELETE",
        })
          .then((res) =>
            res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
          )
          .catch((err) => {
            console.log(err);
          });
    }
    
    // Adding and Removing Likes
    updateLike({LikeButtonIsActive, _id}) {
        return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
          headers: this._headers,
          method: LikeButtonIsActive ? "PUT" : "DELETE",
        })
          .then((res) =>
            res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
          )
          .catch((err) => {
            console.log(err);
          });
    }
}


// 2. Loading Cards from the Server
// GET https://around.nomoreparties.co/v1/groupId/cards
// getInitialCards() { }

// 1. Loading User Information from the Server
// GET https://around.nomoreparties.co/v1/groupId/users/me
// getUserProfile() { }

// getAppInfo() { }


// 4. Adding a New Card
// POST https://around.nomoreparties.co/v1/groupId/cards
// addCard({ name, link }) { }

// 6. Creating a Popup for Deleting a Card

// 7. Deleting a Card
// DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
// deleteCard(cardId) { }

// 5. Showing How Many Likes a Card Has

// 8. Adding and Removing Likes
// PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
// DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
// updateLike(cardId, like) { }


// 3. Editing the Profile
// PATCH https://around.nomoreparties.co/v1/groupId/users/me
// setUserProfile() { }

// 9. Updating Profile Picture
// PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
// setUserAvatar() { }
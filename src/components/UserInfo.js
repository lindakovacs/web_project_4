import { profileName, profileJob } from "../utils/constants.js";

export default class UserInfo {
    constructor( { name, job } ) {
        this._name = name;
        this._job = job;
    }
    // Returns object with user info
    getUserInfo() {
        return {
            name: this._name, 
            job: this._job
        };
    }
    // Takes new user info and adds it on the page
    setUserInfo() {
        profileName.textContent = this._name;
        profileJob.textContent = this._job;
    }
}
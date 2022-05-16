import {profileSubtitle,profileTitle} from './index.js'

export default class UserInfo {
  #name;
  #job;
  constructor({ name, job }) {
    this.#name = name;
    this.#job = job;
  }

  getUserInfo() {
    this.#job.value = profileSubtitle.textContent;
    this.#name.value = profileTitle.textContent;
  }

  setUserInfo() {
    profileSubtitle.textContent = this.#job.value;
    profileTitle.textContent = this.#name.value;
  }
}

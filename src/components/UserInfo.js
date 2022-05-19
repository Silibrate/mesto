export default class UserInfo {
  #name;
  #job;
  constructor({ name, job }) {
    this.#name = name;
    this.#job = job;
  }

  getUserInfo(title, subtitle) {
    this.#job.value = subtitle.textContent;
    this.#name.value = title.textContent;
  }

  setUserInfo(title, subtitle) {
    subtitle.textContent = this.#job.value;
    title.textContent = this.#name.value;
  }
}

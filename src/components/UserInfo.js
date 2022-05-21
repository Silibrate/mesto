export default class UserInfo {
  #name;
  #job;
  constructor({ name, job }) {
    this.#name = name;
    this.#job = job;
  }

  getUserInfo(title, subtitle) {
    subtitle.value = this.#job.textContent;
    title.value = this.#name.textContent;
  }

  setUserInfo(name, profession) {
    this.#name.textContent = name;
    this.#job.textContent = profession;
  }
}

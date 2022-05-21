export default class UserInfo {
  #name;
  #job;
  constructor({ name, job }) {
    this.#name = document.querySelector(name);
    this.#job = document.querySelector(job);
  }

  getUserInfo() {
    const userInfo = {
      subtitle: this.#job.textContent,
      title: this.#name.textContent
    }
    return userInfo
  }

  setUserInfo(name, profession) {
    this.#name.textContent = name;
    this.#job.textContent = profession;
  }
}

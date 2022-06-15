export default class UserInfo {
  #name;
  #job;
  #selectorAvatar
  constructor({ name, job,selectorAvatar }) {
    this.#name = document.querySelector(name);
    this.#job = document.querySelector(job);
    this.#selectorAvatar=document.querySelector(selectorAvatar)
  }

  getUserInfo() {
     const userInfo = {
       subtitle: this.#job.textContent,
       title: this.#name.textContent,
       avatar: this.#selectorAvatar
     }
     return userInfo
  }

  setUserInfo(name, profession) {
    this.#name.textContent = name;
    this.#job.textContent = profession;
  }

  setProfileAvatar(avatar){
    this.#selectorAvatar.src=avatar.avatar;
  }
}

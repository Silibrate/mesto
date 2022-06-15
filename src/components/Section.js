export default class Section {
  #renderer;
  #container;

  constructor({ renderer }, containerSelector) {
    this.#renderer = renderer;
    this.#container = containerSelector;
  }

  renderItems(array) {
    array.slice().reverse().forEach(item => this.#renderer(item));
  }

  render(item) {
    this.#renderer(item);
  }

  reversArray(items) {
    items.revers()
  }

  addItem(element) {
    this.#container.prepend(element)
  }

}

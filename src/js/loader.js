class Loader {
  constructor() {
    this.loaderEl = document.createElement('div');
    this.loaderEl.classList.add('loader');
    document.body.appendChild(this.loaderEl);
  }

  hide() {
    this.loaderEl.classList.add('loader-hidden');
  }

  show() {
    this.loaderEl.classList.remove('loader-hidden');
  }
}
// Створюєте екземпляр класу:
// const loader = new Loader;
// Він динамічно закидає в html розмітку з класами і стилями.
// Далі в потрібних вам місцях викликаєте методи класу.
// loader.show(), для виклику.
// loader.hide(), для відправки в нєбитіє.

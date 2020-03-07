class ViewController {
  constructor(anchorElement, model) {
    this.anchorElement = anchorElement;
    this.model = model;

    this._assignElements();
    this._bindMethods();
    this._addEventListeners();
    this.setElements();
  }

  setElements() {}

  _assignElements() {
    this.dropdown = this.anchorElement.querySelector('.js-dropdown') || this.anchorElement;
    this.dropdownTrigger = this.anchorElement.querySelector('.js-dropdown__trigger');
    this.dropdownMenu = this.anchorElement.querySelector('.js-dropdown__menu');
  }

  _bindMethods() {
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }

  _addEventListeners() {
    document.addEventListener('click', this._handleDocumentClick);
  }

  _handleDocumentClick(event) {
    event.preventDefault();

    if (event.target.closest('.js-dropdown__trigger') !== null) {
      this.dropdown.classList.toggle('dropdown_is-expanded');
    }

    if (event.target.closest('.js-dropdown__trigger') === null && event.target.closest('.js-dropdown__menu') === null) {
      this.dropdown.classList.remove('dropdown_is-expanded');
    }
  }
}

export default ViewController;

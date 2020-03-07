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

    const isDropdownTriggerTarget = event.target.closest('.js-dropdown__trigger') !== null;
    const isDropdownMenuTarget = event.target.closest('.js-dropdown__menu') !== null;

    if (isDropdownTriggerTarget) {
      this.dropdown.classList.toggle('dropdown_is-expanded');
    }

    if (!isDropdownTriggerTarget && !isDropdownMenuTarget) {
      this.dropdown.classList.remove('dropdown_is-expanded');
    }
  }
}

export default ViewController;

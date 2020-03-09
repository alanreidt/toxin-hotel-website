import DropdownMenu from '../dropdown-menu/DropdownMenu'

class ViewController {
  constructor(anchorElement, model) {
    this.anchorElement = anchorElement;
    this.model = model;

    this._assignElements();
    this._createComponents(this.model.getOptions());
    this._bindMethods();
    this._addEventListeners();
    this.setElements(this.model.getOptions());
    this._tieComponents();
  }

  setElements(optionsSet) {
    let guestQuantity = 0;
    let babyQuantity = 0;

    optionsSet.forEach((options) => {
      if (options.name === 'Adult' || options.name === 'Child') {
        guestQuantity += options.value;
      }

      if (options.name === 'Baby') {
        babyQuantity += options.value;
      }
    });

    const guestString = guestQuantity !== 0 ? `${guestQuantity} гостя` : '';
    const babyString = babyQuantity !== 0 ? `${babyQuantity} младенец` : '';

    if (guestQuantity !== 0) {
      this.inputField.value = `${guestString}, ${babyString}`;
    }
  }

  _assignElements() {
    this.dropdown = this.anchorElement.querySelector('.js-dropdown') || this.anchorElement;
    this.dropdownTrigger = this.anchorElement.querySelector('.js-dropdown__trigger');
    this.dropdownMenu = this.anchorElement.querySelector('.js-dropdown__menu');
    this.inputField = this.anchorElement.querySelector('.js-dropdown__input-field');
    this.dropdownDropdownMenu = this.anchorElement.querySelector('.js-dropdown__dropdown-menu');
  }

  _createComponents(optionsSet) {
    DropdownMenu.create(this.dropdownDropdownMenu, optionsSet);
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

  _tieComponents() {
    DropdownMenu.addSubscriber(this.dropdownDropdownMenu, 'update', (options) => {
      this.model.setOptions(options);
    })
  }
}

export default ViewController;

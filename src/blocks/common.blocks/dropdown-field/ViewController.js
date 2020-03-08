import Counter from '../counter/Counter'

class ViewController {
  constructor(anchorElement, model) {
    this.anchorElement = anchorElement;
    this.model = model;

    this._assignElements();
    this._bindMethods();
    this._addEventListeners();
    this.setElements(this.model.getOptions());
    this._tieComponents();
  }

  setElements({ optionsSet }) {
    let guestQuantity = 0;
    let babyQuantity = 0;

    optionsSet.forEach((options, index) => {
      const counter = Counter.create(this.counters[index], options);
      const counterOptions = counter.getOptions();

      if (counterOptions.name !== 'Adult' || counterOptions.name !== 'Child') {
        guestQuantity += counterOptions.value;
      }

      if (counterOptions.name === 'Baby') {
        babyQuantity += counterOptions.value;
      }
    });

    this.inputField.value = `${guestQuantity} гостя, ${babyQuantity} младенец`;
  }

  _assignElements() {
    this.dropdown = this.anchorElement.querySelector('.js-dropdown') || this.anchorElement;
    this.dropdownTrigger = this.anchorElement.querySelector('.js-dropdown__trigger');
    this.dropdownMenu = this.anchorElement.querySelector('.js-dropdown__menu');
    this.inputField = this.anchorElement.querySelector('.js-dropdown__input-field');
    this.counters = this.anchorElement.querySelectorAll('.js-counter');
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
    this.counters.forEach((counter) => {
      Counter.addSubscriber(counter, (options) => {
        this.model.setOptions(options);
      })
    });
  }
}

export default ViewController;

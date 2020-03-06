class ViewController {
  constructor(anchorElement, model) {
    this.anchorElement = anchorElement;
    this.model = model;

    this._assignElements();
    this._bindMethods();
    this._addEventListeners();
    this.setElements(this.model.getOptions());
  }

  setElements({ boundaries, value }) {
    this.quantityDisplay.textContent = value;

    const [min, max] = boundaries;

    this.subtractionButton.classList.remove('counter__button_is-disabled');
    this.additionButton.classList.remove('counter__button_is-disabled');

    if (value === min) {
      this.subtractionButton.classList.add('counter__button_is-disabled');
    }

    if (value === max) {
      this.additionButton.classList.add('counter__button_is-disabled');
    }
  }

  _assignElements() {
    this.counter = this.anchorElement.querySelector('.js-counter') || this.anchorElement;
    this.subtractionButton = this.anchorElement.querySelector('.js-counter__subtraction-button');
    this.additionButton = this.anchorElement.querySelector('.js-counter__addition-button');
    this.quantityDisplay = this.anchorElement.querySelector('.js-counter__quantity-display');
  }

  _bindMethods() {
    this._handleCounterClick = this._handleCounterClick.bind(this);
  }

  _addEventListeners() {
    this.counter.addEventListener('click', this._handleCounterClick);
  }

  _handleCounterClick(event) {
    let { value } = this.model.getOptions();

    if (event.target === this.additionButton) {
      value = value + 1;
    }

    if (event.target === this.subtractionButton) {
      value = value - 1;
    }

    this.model.setOptions({ value });
  }
}

export default ViewController;

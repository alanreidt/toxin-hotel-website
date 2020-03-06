export class Counter {
  constructor(anchorElement) {
    this.anchorElement = anchorElement;

    this._assignElements();
    this._bindMethods();
    this._addEventListeners();
  }

  _assignElements() {
    this.counter = this.anchorElement.querySelector('.js-counter') || this.anchorElement;
    this.subtractionButton = this.anchorElement.querySelector('.counter__button_type_subtraction');
    this.additionButton = this.anchorElement.querySelector('.counter__button_type_addition');
    this.quantityDisplay = this.anchorElement.querySelector('.counter__quantity-display');
  }

  _bindMethods() {
    this._handleCounterClick = this._handleCounterClick.bind(this);
  }

  _addEventListeners() {
    this.counter.addEventListener('click', this._handleCounterClick);
  }

  _handleCounterClick(event) {
    let quantity = parseFloat(this.quantityDisplay.textContent);

    this.quantityDisplay.textContent = (event.target === this.additionButton) ? quantity + 1 :
      (event.target === this.subtractionButton) ? quantity - 1: quantity;
  }
}

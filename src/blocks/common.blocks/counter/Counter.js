export class Counter {
  constructor(anchorElement) {
    this.anchorElement = anchorElement;

    this._addHostEventListener();
    this._assignElements();
  }

  _addHostEventListener() {
    this.anchorElement.addEventListener('click', this._handleHostClick.bind(this));
  }

  _handleHostClick(event) {
    let quantity = parseFloat(this.$quantityDisplay.textContent);

    this.$quantityDisplay.textContent = (event.target === this.$additionButton) ? quantity + 1 :
      (event.target === this.$subtractionButton) ? quantity - 1: quantity;
  }

  _assignElements() {
    this.$subtractionButton = this.anchorElement.querySelector('.counter__button_type_subtraction');
    this.$additionButton = this.anchorElement.querySelector('.counter__button_type_addition');
    this.$quantityDisplay = this.anchorElement.querySelector('.counter__quantity-display');
  }
}

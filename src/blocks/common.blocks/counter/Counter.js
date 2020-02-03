export class Counter {
  constructor($host) {
    this.$host = $host;

    this._addHostEventListener();
    this._assignElements();
  }

  _addHostEventListener() {
    $host.addEventListener("click", this._handleHostClick.bind(this));
  }

  _handleHostClick(event) {
    let quantity = parseFloat(this.$quantityDisplay.textContent);

    this.$quantityDisplay.textContent = (event.target === this.$additionButton) ? quantity + 1 :
      (event.target === this.$subtractionButton) ? quantity - 1: quantity;
  }

  _assignElements() {
    this.$subtractionButton = $host.querySelector(".counter__button_type_subtraction");
    this.$additionButton = $host.querySelector(".counter__button_type_addition");
    this.$quantityDisplay = $host.querySelector(".counter__quantity-display");
  }
}

export class ViewController {
  constructor(anchorElement) {
    this.anchorElement = anchorElement;

    this._addHostEventListener();
  }

  _addHostEventListener() {
    this.anchorElement.addEventListener('focusin', this._handleParentFocusIn.bind(this));
    document.addEventListener('click', this._handleDocumentClick.bind(this));
  }

  _handleParentFocusIn() {
    this.anchorElement.classList.add('dropdown_is-expanded');
  }

  _handleDocumentClick(event) {
    const target = event.target.closest('.js-dropdown');

    if (target !== this.anchorElement) {
      this.anchorElement.classList.remove('dropdown_is-expanded');
    }
  }
}

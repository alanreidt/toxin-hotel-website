export class DropdownField {
  constructor($host) {
    this.$host = $host;

    this._addHostEventListener();
  }

  _addHostEventListener() {
    this.$host.addEventListener("focusin", this._handleParentFocusIn.bind(this));
    document.addEventListener("click", this._handleDocumentClick.bind(this));
  }

  _handleParentFocusIn() {
    this.$host.classList.add("dropdown-field_is-expanded");
  }

  _handleDocumentClick(event) {
    const target = event.target.closest(".js-dropdown-field");

    console.log(target);

    if (target !== this.$host) {
      this.$host.classList.remove("dropdown-field_is-expanded");
    }
  }
}

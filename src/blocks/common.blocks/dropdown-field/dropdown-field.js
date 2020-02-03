export class DropdownField {
  constructor($host) {
    this.$host = $host;

    this._addHostEventListener();
  }

  _addHostEventListener() {
    this.$host.addEventListener("focusin", this._handleParentFocusIn.bind(this));
  }

  _handleParentFocusIn() {
    this.$host.classList.add("dropdown-field_is-expanded");
  }
}

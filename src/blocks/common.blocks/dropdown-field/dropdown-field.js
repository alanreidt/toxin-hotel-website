export class DropdownField {
  constructor($host) {
    this.$host = $host;

    $host.addEventListener( "focusin", this.handleParentFocusIn.bind(this) );
  }

  handleParentFocusIn() {
    this.$host.classList.add("dropdown-field_is-expanded");
  }
}

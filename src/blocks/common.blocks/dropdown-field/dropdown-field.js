export class DropdownField {
  constructor($parent) {
    this.$parent = $parent;

    $parent.addEventListener( "focusin", this.handleParentFocusIn.bind(this) );
  }

  handleParentFocusIn() {
    this.$parent.classList.add("dropdown-field_is-expanded");
  }
}

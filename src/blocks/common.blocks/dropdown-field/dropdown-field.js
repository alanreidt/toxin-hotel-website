export class DropdownField {

  constructor($parent) {
    this.$parent = $parent;
    this.$optionList = $parent.querySelector(".dropdown-field__dropdown");
    this.$removeButton = $parent.querySelector(".dropdown-field__button_remove");
    this.$addButton = $parent.querySelector(".dropdown-field__button_add");
    this.$quantity = $parent.querySelector(".dropdown-field__quantity");

    $parent.addEventListener( "focusin", this.handleParentFocusIn.bind(this) );
  }


  handleParentFocusIn() {
    this.$parent.classList.add("dropdown-field_is-expanded");

    this.$optionList.addEventListener( "click", this.handleOptionListClick.bind(this) );
  }


  handleOptionListClick(event) {
    let quantity = parseFloat( this.$quantity.textContent );

    this.$quantity.textContent = ( event.target === this.$addButton ) ? ++quantity :
      ( event.target === this.$removeButton ) ? --quantity : quantity;
  }

}

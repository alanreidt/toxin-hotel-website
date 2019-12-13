import { DropdownField } from "./dropdown-field";


window.onload = function() {
  const dropdownFields = document.querySelectorAll(".js-dropdown-field");

  dropdownFields.forEach( (dropdownField) => {
    new DropdownField(dropdownField);
  });
};

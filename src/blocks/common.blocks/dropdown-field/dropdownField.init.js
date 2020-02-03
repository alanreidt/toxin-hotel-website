import { DropdownField } from "./dropdown-field";

window.addEventListener("load", handleWindowLoad());

function handleWindowLoad() {
  const dropdownFields = document.querySelectorAll(".js-dropdown-field");

  dropdownFields.forEach((dropdownField) => {
    new DropdownField(dropdownField);
  });
};

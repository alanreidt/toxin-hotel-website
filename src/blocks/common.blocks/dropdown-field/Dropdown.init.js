import Dropdown from './Dropdown';

window.addEventListener('load', handleWindowLoad());

function handleWindowLoad() {
  const dropdowns = document.querySelectorAll('.js-dropdown');

  dropdowns.forEach((dropdown) => {
    Dropdown.create(dropdown, [
      {
        name: 'Adult',
        boundaries: [1, 5],
      },
      {
        name: 'Child',
      },
      {
        name: 'Baby',
      }
    ]);
  });
};

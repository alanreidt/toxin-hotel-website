import Dropdown from './Dropdown';

window.addEventListener('load', handleWindowLoad());

function handleWindowLoad() {
  const dropdowns = document.querySelectorAll('.js-dropdown');

  dropdowns.forEach((dropdown) => {
    Dropdown.create(dropdown, [
      {
        name: 'Adult',
        boundaries: [1, 5],
        value: 0,
      },
      {
        name: 'Child',
        boundaries: [0, 5],
        value: 0,
      },
      {
        name: 'Baby',
        boundaries: [0, 3],
        value: 0,
      }
    ]);
  });
};

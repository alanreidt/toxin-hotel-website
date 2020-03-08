import Dropdown from './Dropdown';

window.addEventListener('load', handleWindowLoad());

function handleWindowLoad() {
  const dropdowns = document.querySelectorAll('.js-dropdown');

  dropdowns.forEach((dropdown) => {
    Dropdown.create(dropdown, {
      optionsSet: [
        {
          name: 'Adult',
          value: 2,
        },
        {
          name: 'Child',
        },
        {
          name: 'Baby',
        }
      ],
    });
  });
};

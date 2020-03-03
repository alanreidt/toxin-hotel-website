import Cleave from 'cleave.js';

window.addEventListener("load", () => {
  const dateMasks = document.querySelectorAll(".js-date-mask");

  dateMasks.forEach((dateMask) => {
    new Cleave(dateMask, {
      date: true,
      delimiter: '.',
      dateMin: '2019-01-01',
      dateMax: '2022-12-31',
      datePattern: ['d', 'm', 'Y'],
    });
  });
});
